<template>
  <v-container class="generic-container">
    <go-back-header :headerTitle="headerTitle"></go-back-header>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1">
        <h2>Configure Subset</h2>
        <small>Define subset parameters</small>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          :complete="e1 > 2"
          step="2">
          <h2>Find Concepts</h2>
          <small>Query concepts to be included in the subset</small>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          step="3">
          <h2>Review List</h2>
          <small>Verify the final subset list</small>
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>

      <v-stepper-items>
      <!-- STEP 1 -->
        <v-stepper-content step="1">
          <v-row class="" style="min-height: 400px">
            <v-col cols="12" style="background-color: gree">
            <form>
                <br>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="6"
                    sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Subset Name"
                      class="d-flex">
                      required></v-text-field>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="6"
                    sm="6">
                    <v-text-field
                      outlined
                      dense
                      label="Description"
                      class="d-flex">
                      required></v-text-field>
                  </v-col>
                </v-row>

                <v-row align="center">
                  <v-col
                    cols="6"
                    sm="6">
                  <h3 class="form-subheader">Domain</h3>
                  </v-col>
                  <v-col
                    cols="6"
                    sm="6">
                  <h3 class="form-subheader">Vocabulary</h3>
                  </v-col>
                </v-row>

                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="6"
                    style="background-color:ed"
                    sm="6">
                    <div class="mr-4 ml-4">
                      <v-layout row wrap>
                        <v-flex v-for="(domain,index) in domains"
                          :key="index" xs6>
                          <v-checkbox light
                            :label="domain.label"
                            :value="domain.value" >
                          </v-checkbox>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="6"
                    sm="6">
                    <div class="mr-4 ml-4">
                      <v-layout row wrap>
                        <v-flex v-for="(vocabulary,index) in vocabularies" :key="index" xs6>
                          <v-checkbox light
                            :label="vocabulary.label"
                            :value="vocabulary.value" >
                          </v-checkbox>
                        </v-flex>
                      </v-layout>
                    </div>
                  </v-col>
                </v-row>

                <v-btn
                  color="continue-button primary"
                  class="mr-4"
                  @click="e1 = 2">
                  Continue
                </v-btn>
              </form>
            </v-col>

          </v-row>
        </v-stepper-content>

        <!-- STEP 2 -->
        <v-stepper-content step="2">
          <v-row class="" style="">
            <v-col cols="6" style="background-color: ed">
            <h2 class="form-subheader">Search Concepts</h2>
              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
              <br>
                <v-data-table
                  :headers="searchValuesetContent.headers"
                  :items="searchValuesetContent.rows"
                  item-key="conceptId"
                  show-select
                  :items-per-page="5"
                  class="elevation-1">
                  <template v-slot:item.action="{ item }">
                    <a href="" class="descendant">
                    <v-icon color="blue darken-1"
                      v-model="item.action"
                      text >mdi-magnify</v-icon>
                    </a>
                  </template>
                </v-data-table>
            </v-col>
            <v-col cols="6" style="background-color: ed">
              <h2 class="form-subheader">Selected Concepts</h2>
              <br> <br> <br>
              <v-data-table
                :headers="selectedValuesetContent.headers"
                :items="selectedValuesetContent.rows"
                :items-per-page="5"
                class="elevation-1">
                <template v-slot:item.action="{ item }">
                  <v-icon color="blue darken-1"
                    v-model="item.action"
                    text >mdi-delete</v-icon>
                </template>
              </v-data-table>
            </v-col>
          </v-row>

          <v-row class="" style="">
          </v-row>
          <br> <br>
          <v-btn
            color="primary"
            class="mr-4"
            @click="e1 = 3">
            Continue
          </v-btn>
          <v-btn text
            class="mr-4"
            @click="e1 = 1">
            Back
          </v-btn>

        </v-stepper-content>

        <v-stepper-content step="3">
          <h2 class="form-subheader">Final Subsets: Cardiovasuclar Disease</h2>
            <v-data-table
              :headers="valuesetContent.headers"
              :items="valuesetContent.rows"
              :items-per-page="5"
              :search="search"
              class="elevation-1">
            ></v-data-table>
          <br> <br>
          <v-btn
            color="primary"
            class="mr-4"
            @click="e1 = 3">
            Submit
          </v-btn>

          <v-btn text
            @click="e1 = 2">
            Back
          </v-btn>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import GoBackHeader from '../../components/ui/GoBackHeader.vue';

export default {
  name: 'SubsetCreate',
  components: {
    GoBackHeader,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      headerTitle: 'Create Subset',
      search: '',
      e1: 1,
      domains: [
        { label: 'Condition', value: 'condition' },
        { label: 'Measurement', value: 'medication' },
        { label: 'Medication', value: 'medication' },
        { label: 'Procedure', value: 'procedure' },
      ],
      vocabularies: [
        { label: 'RxNorm', value: 'rxnorm' },
        { label: 'ICD10 CM', value: 'icd10cm' },
        { label: 'SNOMED CT', value: 'snomedct' },
        { label: 'LOINC', value: 'loinc' },
      ],
      subsetContent: {
        headers: [
          {
            text: 'Subset Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
        ],
        rows: [
          { name: 'Cardiovascular Diseases' },
          { name: 'NSAIDS Medications' },
          { name: 'Kidney Disease' },
          { name: 'Diabetes Medications' },
          { name: 'Ulcer Medications' },
        ],
      },
      valuesetContent: {
        headers: [
          { text: 'Code', value: 'conceptCode' },
          { text: 'Name', value: 'conceptName' },
          { text: 'Class', value: 'class' },
          { text: 'Domain', value: 'domain' },
          { text: 'Vocabulary', value: 'vocabulary' },
        ],
        rows: [
          {
            conceptId: '213234',
            conceptCode: '344-2',
            conceptName: 'Transient Ischemic Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            conceptId: '23233',
            conceptCode: '344-3',
            conceptName: 'Heart Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
        ],
      },
      searchValuesetContent: {
        headers: [
          { text: 'Code', value: 'conceptCode' },
          { text: 'Name', value: 'conceptName' },
          { text: 'Class', value: 'class' },
          { text: 'Domain', value: 'domain' },
          { text: 'Vocabulary', value: 'vocabulary' },
          { text: 'Descendants', align: 'center', value: 'action' },
        ],
        rows: [
          {
            conceptId: '2234',
            conceptCode: '344-2',
            conceptName: 'Ischemic Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            conceptId: '213',
            conceptCode: '344-2',
            conceptName: 'Transient Ischemic Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            conceptId: '2133',
            conceptCode: '344-3',
            conceptName: 'Heart Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            conceptId: '2234',
            conceptCode: '344-2',
            conceptName: 'Ischemic Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            conceptId: '213',
            conceptCode: '344-2',
            conceptName: 'Transient Ischemic Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            conceptId: '2333',
            conceptCode: '344-3',
            conceptName: 'Heart Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
        ],
      },
      selectedValuesetContent: {
        headers: [
          {
            text: 'Action',
            value: 'action',
          },
          { text: 'Code', value: 'conceptCode' },
          { text: 'Name', value: 'conceptName' },
          { text: 'Class', value: 'class' },
          { text: 'Domain', value: 'domain' },
          { text: 'Vocabulary', value: 'vocabulary' },
        ],
        rows: [
          {
            action: true,
            conceptId: '213234',
            conceptCode: '344-2',
            conceptName: 'Transient Ischemic Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            action: true,
            conceptId: '213233',
            conceptCode: '344-3',
            conceptName: 'Heart Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
        ],
      },
      reportContent: {
        headers: [
          {
            text: 'Action',
            value: 'action',
            align: '',
          },
          { text: 'Data Source', value: 'source' },
          { text: 'Number of Patients', value: 'totalPatients' },
          { text: 'Number of Records', value: 'totalRecords' },
          { text: 'Date Generated', value: 'dateGenerated' },
          { text: 'Generation Status', value: 'status' },
        ],
        rows: [
          {
            action: true,
            name: 'Cardiovascular Diseases',
            source: 'The Medical City',
            totalPatients: '400,000',
            totalRecords: '1,800,000',
            dateGenerated: '2021-06-15 06:00:30',
            status: 'COMPLETE',
          },
          {
            action: true,
            name: 'Cardiovascular Diseases',
            source: 'Medcheck',
            totalPatients: '100,000',
            totalRecords: '300,000',
            dateGenerated: '',
            status: 'INCOMPLETE',
          },
          {
            action: true,
            name: 'Cardiovascular Diseases',
            source: 'Keralty',
            totalPatients: '10,000',
            totalRecords: '200,000',
            dateGenerated: '',
            status: 'IN PROGRESS',
          },
        ],
      },
    };
  },
  methods: {
    addField() {
      this.textFields.push({
        value: '',
      });
    },
    addDemographics() {
      this.demographics.push({
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      });
    },
    addMultipleField() {
      this.refinements.push({
        criteria: {
          value: '',
        },
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      });
      console.log(this.refinements);
    },
    removeField(index) {
      this.textFields.splice(index, 1);
    },
    removeMultipleField(index, refinements) {
      console.log(index);
      console.log(refinements);
      this.refinements.splice(index, 1);
    },
    getColor(status) {
      if (status === 'INCOMPLETE') {
        this.statusColor = 'red';
      } else if (status === 'IN PROGRESS') {
        this.statusColor = 'orange';
      } else {
        this.statusColor = 'green';
      }
      return this.statusColor;
    },
  },
};
</script>
<style scoped>
.form-subheader {
  text-align:left;
}
.result-subheader {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 5px;
}
.descendant {
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: inherit;
}
.continue-button {
  margin-top: 40px;
}
</style>
