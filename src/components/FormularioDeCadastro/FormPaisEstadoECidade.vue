<template>
 <form class="flex flex-wrap gap-4">
    <div class="w-full m md:w-3/12">
      <label for="country" class="block text-gray-700 font-bold mb-2">País:</label>
      <select id="country" v-model="selectedCountry" @change="fetchStates"
        class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option v-for="country in countries" :key="country.geonameId" :value="country">{{ country.countryName }}</option>
      </select>
    </div>

    <div class="w-full m md:w-3/12">
      <label for="state" class="block text-gray-700 font-bold mb-2">Estado:</label>
      <select id="state" v-model="selectedState" @change="fetchCities"
        class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option v-for="state in states" :key="state.geonameId" :value="state">{{ state.name }}</option>
      </select>
    </div>

    <div class="w-full m md:w-3/12">
      <label for="city" class="block text-gray-700 font-bold mb-2">Cidade:</label>
      <select id="city" v-model="selectedCity"
        class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option v-for="city in cities" :key="city.geonameId" :value="city">{{ city.name }}</option>
      </select>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: '',
      selectedState: '',
      selectedCity: ''
    }
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    fetchCountries() {
      axios.get(`http://www.geonames.org/childrenJSON?geonameId=6255150`)
        .then(response => {
          this.countries = response.data.geonames;
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchStates() {
      axios.get(`http://www.geonames.org/childrenJSON?geonameId=${this.selectedCountry.geonameId}`)
        .then(response => {
          this.states = response.data.geonames;
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchCities() {
      axios.get(`http://www.geonames.org/childrenJSON?geonameId=${this.selectedState.geonameId}`)
        .then(response => {
          this.cities = response.data.geonames;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>
