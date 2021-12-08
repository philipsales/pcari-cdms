<template>
  <v-container class="generic-container">
    <go-back-header :headerTitle="headerTitle"></go-back-header>
    <v-stepper v-model="e1" class="rounded-0">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
        <h2>Configure Project</h2>
        <small>Create project scope, type and description</small>
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
        <h2>Select Annotation Type</h2>
        <small>Select task type</small>
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
        <h2>Set Labels</h2>
        <small>Define the labels settings</small>
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-row>
            <v-col
              cols="12"
              sm="6">
            <v-text-field
              label="Project Name"
              outlined
              dense
              class="">
              </v-text-field>
              <v-select
                v-model="value"
                :items="dataSource"
                dense
                outlined
                attach
                label="Data Source"
                multiple
              ></v-select>
            <v-text-field
              label="Key words"
              outlined
              dense
              class="">
              </v-text-field>
            </v-col>
          </v-row>
          <br><br>
          <v-btn
            color="primary"
            class="mr-4"
            @click="e1 = 2"
          >
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-row>
              <v-col
                cols="12"
                sm="12">
              <h3 class="form-subheader">Annotation Type</h3>
              <v-row v-for="(annotation,index) in annotations"
                :key="index">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-checkbox
                  :label="annotation.label"
                  :value="annotation.value" >
                </v-checkbox>
              </v-row>
              </v-col>
            </v-row>
          <br><br>
          <v-btn
            color="primary"
            class="mr-4"
            @click="e1 = 3"
          >
            Continue
          </v-btn>
          <v-btn
            class="mr-4"
            @click="e1 = 1"
            text>
            Back
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-row>
            <v-col
              cols="12"
              sm="6">
                <h3 class="form-subheader">Labels</h3>
                <br>
                <div v-for="(refinement, index) in refinements"
                  :key=index>
                  <v-row dense align="center" class="label-row">
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="4">
                      <v-text-field
                        outlined
                        dense
                        label="Label name">
                      </v-text-field>
                    </v-col>
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="3">
                      <v-text-field
                        outlined
                        dense
                        label="Shortcut key">
                      </v-text-field>
                    </v-col>
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="3">
                      <v-text-field
                        outlined
                        dense
                        label="Color">
                      </v-text-field>
                    </v-col>
                    <v-btn text class="dynamic-delete-button"
                      @click="removeMultipleField(index, refinements)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-row>
                </div>
                <v-spacer></v-spacer>
                <v-btn @click="addMultipleField" class="add-button primary">add</v-btn>
              </v-col>
              <v-col
              cols="12"
              sm="6">
                <h3 class="form-subheader">Preview</h3>
                <br>
                <v-row>

                <span v-for="(label, index) in labelConfigurations"
                  :key=index>
                  <v-chip
                      class="ma-1 label-box"
                      label
                      outlined
                      :border-color="label.color"
                      :color="label.color"
                    >
                      <!-- <v-avatar
                        label
                        outlined
                        class="darken-4"
                      >
                      </v-avatar> -->
                      <strong> {{label.text}} <sup>[{{label.shortcut}}]</sup>
                      </strong>
                  </v-chip>
                </span>
                </v-row>
              </v-col>
          </v-row>
          <br> <br>

          <v-btn
            color="primary"
            class="mr-4"
          >
          <router-link class="nav-link"
            :to="{name: 'ProjectWorkplace'}" >
            Submit
          </router-link>
          </v-btn>

          <v-btn
            class="mr-4"
            @click="e1 = 2"
            text>
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
  name: 'ProjectCreate',
  components: {
    GoBackHeader,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      headerTitle: 'Create Project',
      search: '',
      e1: 1,
      annotations: [
        { label: 'Text Classification', value: 'textClassification' },
        { label: 'Named Entity Recognition', value: 'namedEntityRecognition' },
      ],
      vocabularies: [
        { label: 'RxNorm', value: 'rxnorm' },
        { label: 'ICD10 CM', value: 'icd10cm' },
        { label: 'SNOMED CT', value: 'snomedct' },
        { label: 'LOINC', value: 'loinc' },
      ],
      labelConfigurations: [
        { text: 'medication', shortcut: '1', color: 'orange' },
        { text: 'condition', shortcut: '2', color: 'purple' },
        { text: 'laboratory test', shortcut: '3', color: 'indigo' },
        { text: 'laboratory result', shortcut: '4', color: 'green' },
      ],
      refinements: [{
        criteria: {
          value: '',
        },
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      }],
      dataSource: [
        'The Medical City',
        'Keralty',
        'Medcheck',
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
.continue-button {
  margin-top: 40px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
.label-row {
  height: 60px;
  background-color: rxed;
}
</style>
