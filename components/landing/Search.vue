<template>
  <form class="search" @submit.prevent="searchQuery">
    <div class="form-control">
      <i class="icon-search"></i>
      <input
        type="search"
        placeholder="Filter by title , companies , expertise ..."
        v-model="title"
        @input="filterTitle"
      />
      <SearchSuggestion
        v-if="showTitleSuggestion"
        subject="title"
        v-on:select-suggestion="selectSuggestion"
        :items="filteredTitles"
      />
    </div>
    <div class="form-control">
      <i class="icon-location"></i>
      <input
        type="search"
        placeholder="Filter by location"
        v-model="location"
        @input="filterLocation"
      />
      <SearchSuggestion
        v-if="showLocationSuggestion"
        subject="location"
        v-on:select-suggestion="selectSuggestion"
        :items="filteredLocations"
      />
    </div>
    <div class="full-time">
      <input
        type="checkbox"
        id="full-time"
        @change="isFullTime = !isFullTime"
      />
      <label for="full-time">Full Time Only</label>
    </div>
    <button>Search</button>
    <span
      class="remove-filters"
      @click="removeFilters"
      v-if="filteredJobs.length"
    >
      Remove Filters
    </span>
    <div v-if="showError" class="error-message">
      {{ showError }}
    </div>
  </form>
</template>

<script>
import SearchSuggestion from "@/components/landing/SearchSuggestion";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { SearchSuggestion },
  data() {
    return {
      titles: [],
      locations: [],
      filteredTitles: [],
      filteredLocations: [],
      title: "",
      location: "",
      showTitleSuggestion: false,
      showLocationSuggestion: false,
      isFullTime: false,
      showError: null
    };
  },

  computed: {
    ...mapGetters({
      results: "getJobs",
      filteredJobs: "getFilteredResults"
    })
  },

  methods: {
    ...mapActions(["changeFilteredResults", "removeFilteredResult"]),
    selectSuggestion({ selected, subject }) {
      if (subject === "title") {
        this.title = selected;
        this.showTitleSuggestion = false;
      } else {
        this.location = selected;
        this.showLocationSuggestion = false;
      }
    },
    async filterTitle() {
      if (this.title !== "") {
        this.showTitleSuggestion = true;
        this.filteredTitles = this.titles.filter(itemTitle =>
          itemTitle.toLowerCase().includes(this.title.trim())
        );
      } else {
        this.filteredTitles = this.titles;
        this.showTitleSuggestion = false;
      }
    },
    filterLocation() {
      if (this.location !== "") {
        this.showLocationSuggestion = true;
        this.filteredLocations = this.locations.filter(locations =>
          locations.toLowerCase().includes(this.location.trim())
        );
      } else {
        this.filteredLocations = this.locations;
        this.showLocationSuggestion = false;
      }
    },
    searchQuery() {
      this.showError = null;
      const searchBy = {};
      this.title && (searchBy.title = this.title);
      this.location && (searchBy.location = this.location);
      this.isFullTime && (searchBy.isFullTime = "Full Time");
      if (Object.keys(searchBy).length > 0) {
        let results = this.results;
        if (searchBy.isFullTime) {
          results = results.filter(
            result => result.type === searchBy.isFullTime
          );
        }
        if (searchBy.location) {
          results = results.filter(
            result => result.location === searchBy.location
          );
        }
        if (searchBy.title) {
          results = results.filter(result => result.title === searchBy.title);
        }
        this.changeFilteredResults(results);
      } else {
        this.showError = "Please fill out at least one of fields";
        setTimeout(() => {
          this.showError = null;
        }, 6000);
      }
    },
    removeFilters() {
      this.removeFilteredResult();
    }
  },
  created() {
    const locations = [];
    const titles = [];

    this.results.map(item => {
      locations.push(item.location);
      titles.push(item.title, item.company);
    });
    this.locations = [...new Set(locations)];
    this.filteredLocations = [...new Set(locations)];
    this.titles = [...new Set(titles)];
    this.filteredTitles = [...new Set(titles)];
  }
};
</script>

<style scoped>
.remove-filters {
  position: absolute;
  right: 0;
  bottom: -38px;
  cursor: pointer;
  background-color: var(--white);
  color: var(--violet);
  font-size: 12px;
  padding: 10px 12px;
}
.search {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -30px;
  position: relative;
  background-color: var(--whiteBg);
  border-radius: 4px;
}
.form-control {
  position: relative;
  flex-grow: 1;
  border-right: 1px solid var(--grayLightBg);
}
.form-control input {
  background-color: var(--whiteBg);
}
.form-control:nth-of-type(1) {
  flex-grow: 2;
  border-radius: 4px 0 0 4px;
}

.form-control:nth-of-type(1) input {
  border-radius: 4px 0 0 4px;
}
.form-control input[type="search"],
.form-control input[type="text"] {
  width: 100%;
  height: 60px;
  padding-left: 40px;
  padding-right: 10px;
  border: none;
}
.form-control i {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
  font-style: normal;
  font-size: 20px;
  color: var(--violet);
}
.search button {
  background: var(--violet);
  color: white;
  padding: 12px 26px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  align-self: center;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 5px;
}
@media (max-width: 800px) {
  .search {
    padding-bottom: 10px;
    margin-top: -70px;
  }
  .search button {
    width: 100%;
    margin-top: 20px;
  }
  .form-control input[type="search"],
  .form-control input[type="text"] {
    height: 50px;
  }
}
.full-time {
  padding: 0 40px;
  display: flex;
  align-items: center;
  margin-top: 12px;
}
@media (min-width: 800px) and (max-width: 1439px) {
  .full-time {
    padding: 0 10px;
  }
}
@media (max-width: 800px) {
  .full-time {
    padding: 0 10px;
    padding-left: 20px;
    width: 100%;
  }
}

.full-time label {
  margin-left: 10px;
  margin-top: 2px;
  font-size: 10px;
  color: var(--blackText);
  font-weight: 700;
}
.error-message {
  color: red;
  width: 100%;
  padding: 7px 0;
  position: absolute;
  top: 100%;
  left: 0;
}
</style>
