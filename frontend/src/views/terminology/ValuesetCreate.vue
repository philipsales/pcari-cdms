<template>
  <v-container class="generic-container">
  <go-back-header :headerTitle="headerTitle"></go-back-header>
    <v-card>
      <v-row class="">
        <v-col cols="8" class="valueset-search">
            <v-row no-gutters>
              <v-col
                class="d-flex"
                cols="12"
                xl="4"
                sm="5">
              <v-text-field
                prepend-inner-icon="mdi-magnify"
                single-line
                outlined
                dense
                label="Type to Search"
                class="rounded-r-0 rounded-l-md d-flex"
                required></v-text-field>
              </v-col>
              <v-col
                class="d-flex"
                cols="12"
                style="margin-left: -1px"
                xl="2"
                sm="3">
                <v-select
                  class="rounded-l-0 rounded-r-md"
                  :items="vocabularies"
                  :model="vocabularies"
                  name="label"
                  item-text="label"
                  dense
                  outlined
                  label="Domain">
                </v-select>
              </v-col>
            </v-row>
            <v-row align="center">
              <v-layout child-flex>
                <v-data-table
                  :headers="subsetContent.headers"
                  :items="subsetContent.rows"
                  class="elevation-1"
                ></v-data-table>
              </v-layout>
            </v-row>
        </v-col>
        <v-divider vertical inset></v-divider>
        <v-col cols="4" class="valueset-input">
          <form style="background-color: rd">
            <v-text-field
              outlined
              dense
              label="Drug Code"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Drug Code Type"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Preferred Name"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Generic Name"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Brand Name"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Strength"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Form"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Route"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Content"
              required
            ></v-text-field>
            <v-btn
              class="mr-4 primary">
              submit
            </v-btn>
            </form>
        </v-col>
    </v-row>
    </v-card>
  </v-container>
</template>

<script>
import GoBackHeader from '../../components/ui/GoBackHeader.vue';

export default {
  name: 'ValuesetCreate',
  components: {
    GoBackHeader,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      search: '',
      headerTitle: 'Create Valueset',
      vocabularies: [
        { label: 'RxNORM', value: 'rxnorm' },
        { label: 'ICD10 CM', value: 'icd10cm' },
        { label: 'SNOMED CT', value: 'snomedct' },
        { label: 'LOINC', value: 'loinc' },
      ],
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
      subsetContent: {
        headers: [
          {
            text: 'Drug Code',
            align: 'start',
            sortable: false,
            value: 'drugCode',
          },
          { text: 'Drug Code Type', value: 'drugCodeType' },
          { text: 'Description', value: 'description' },
          { text: 'Preferred Name', value: 'preferredName' },
          { text: 'Brand Name', value: 'brandName' },
          { text: 'Generic Name', value: 'genericName' },
          { text: 'Strength', value: 'strength' },
          { text: 'Form', value: 'form' },
          { text: 'Route', value: 'route' },
          { text: 'Content', value: 'content' },
          { text: 'Status', value: 'status' },
          { text: 'Reference URL', value: 'referenceURL' },
          { text: 'Reference Description', value: 'referenceDescription' },
          { text: 'Substance Category', value: 'substanceCategory' },
          { text: 'Dosage', value: 'dosage' },
          { text: 'Amount', value: 'amount' },
          { text: 'Batch expiration date', value: 'batchExpirationDate' },
          { text: 'Batch lot number', value: 'batchLotNumber' },
        ],
        rows: [
          {
            drugCode: '0123$343',
            drugCodeType: 'RxNorm Extension',
            description: 'paracetamol 200mg Oral Tablet [Biogesic]',
            preferredName: 'paracetamol 200mg Oral Tablet [Biogesic]',
            brandName: 'Biogesic',
            genericName: 'paracetamol',
            strength: '200 mg',
            form: 'Tablet',
            route: 'Oral',
            content: 'paracetamol',
            dosage: '',
            amount: '',
            batchExpirationDate: '',
            batchLotNumber: '',
            status: '',
            referenceURL: 'https://www.fda.gov.ph',
            referenceDescription: 'Food and Drug Philippines',
            substanceCategory: 'Controlled',
          },
          {
            drugCode: '0123$343',
            drugCodeType: 'RxNorm Extension',
            description: 'paracetamol 200mg Oral Tablet [Biogesic]',
            preferredName: 'paracetamol 200mg Oral Tablet [Biogesic]',
            brandName: 'Biogesic',
            genericName: 'paracetamol',
            strength: '200 mg',
            form: 'Tablet',
            route: 'Oral',
            content: 'paracetamol',
            dosage: '',
            amount: '',
            batchExpirationDate: '',
            batchLotNumber: '',
            status: '',
            referenceURL: 'https://www.fda.gov.ph',
            referenceDescription: 'Food and Drug Philippines',
            substanceCategory: 'Controlled',
          },
          {
            drugCode: '0123$343',
            drugCodeType: 'RxNorm Extension',
            description: 'paracetamol 200mg Oral Tablet [Biogesic]',
            preferredName: 'paracetamol 200mg Oral Tablet [Biogesic]',
            brandName: 'Biogesic',
            genericName: 'paracetamol',
            strength: '200 mg',
            form: 'Tablet',
            route: 'Oral',
            content: 'paracetamol',
            dosage: '',
            amount: '',
            batchExpirationDate: '',
            batchLotNumber: '',
            status: '',
            referenceURL: 'https://www.fda.gov.ph',
            referenceDescription: 'Food and Drug Philippines',
            substanceCategory: 'Controlled',
          },
          {
            drugCode: '0123$343',
            drugCodeType: 'RxNorm Extension',
            description: 'paracetamol 200mg Oral Tablet [Biogesic]',
            preferredName: 'paracetamol 200mg Oral Tablet [Biogesic]',
            brandName: 'Biogesic',
            genericName: 'paracetamol',
            strength: '200 mg',
            form: 'Tablet',
            route: 'Oral',
            content: 'paracetamol',
            dosage: '',
            amount: '',
            batchExpirationDate: '',
            batchLotNumber: '',
            status: '',
            referenceURL: 'https://www.fda.gov.ph',
            referenceDescription: 'Food and Drug Philippines',
            substanceCategory: 'Controlled',
          },
          {
            drugCode: '0123$343',
            drugCodeType: 'RxNorm Extension',
            description: 'paracetamol 200mg Oral Tablet [Biogesic]',
            preferredName: 'paracetamol 200mg Oral Tablet [Biogesic]',
            brandName: 'Biogesic',
            genericName: 'paracetamol',
            strength: '200 mg',
            form: 'Tablet',
            route: 'Oral',
            content: 'paracetamol',
            dosage: '',
            amount: '',
            batchExpirationDate: '',
            batchLotNumber: '',
            status: '',
            referenceURL: 'https://www.fda.gov.ph',
            referenceDescription: 'Food and Drug Philippines',
            substanceCategory: 'Controlled',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.terminology-page {
  width: 100%;
  background-color: ed;
  /* height: 1000px; */
}
.page-sidebar {
  z-index: 1;
  margin-top:10px;
}
.valueset-input {
  padding: 40px;
}
.valueset-search {
  padding: 40px;
}
</style>
