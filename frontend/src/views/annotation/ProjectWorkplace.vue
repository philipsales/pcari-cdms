<template>
  <v-container class="annotation-workspace-container">
    <page-header :headerTitle="headerTitle"></page-header>
     <v-row class="annotation-workspace-header">
      <v-col
        sm="12"
        md="12"
        xl="12"
        class="annotation-workspace-title"
      >
        <h3> Breast Cancer Project</h3>
      </v-col>
     </v-row>

     <!-- WORKPLACE ROW-->
    <v-row style="background-color: rd">
    <!-- PROGRESS COLUMN-->
      <v-col
        sm="3"
        md="3"
        xl="2"
        style="background-color: "
      >
        <!-- PROGRESS -->
        <v-card class="rounded-sm progress-card rounded-sm">
          <div class="text-overline mb-4">
            PROGRESS
          </div>
          <v-progress-linear
            v-model="progress.total"
            height="20"
            color="#6E0D1C"
          >
            <strong>{{ Math.ceil(progress.total) }}%</strong>
          </v-progress-linear>
          <br>
          <div class="progress-text">
            <v-row class="mb-2">
                <h5> Total</h5>
                <v-spacer></v-spacer>
                100
            </v-row>
            <v-row class="mb-2">
                <h5> Submitted</h5>
                <v-spacer></v-spacer>
                78
            </v-row>
            <v-row class="mb-2">
                <h5> Skipped</h5>
                <v-spacer></v-spacer>
                8
            </v-row>
          </div>
        </v-card>

        <!-- ENTITY MATCH -->
        <v-card class="rounded-sm entity-match-card">
          <div class="text-overline mb-4">
            RESULT
            <v-icon class="mb2" dense>mdi-delete</v-icon>
          </div>
          <div class="entity-match-text">
            <v-row class="mb-2">
                <h5>Entity</h5>
                <v-spacer></v-spacer>
                <v-chip
                    color="green"
                    text-color="green"
                    outlined
                    label
                >
                {{ selectedEntity.text }}
                </v-chip>
            </v-row>
            <v-row class="mb-2">
                <h5>Label</h5>
                <v-spacer></v-spacer>
                <v-chip
                    color="green"
                    text-color="green"
                    outlined
                    label
                >
                {{ selectedEntity.label }}
                </v-chip>
            </v-row>
          </div>
        </v-card>

        <!-- LABELELD ENTITIES -->
        <v-card class="rounded-sm labelled-entity-card" style="min-height: 420px;">
          <div class="text-overline mb-4">
            LABELLED ENTITIES
          </div>
          <div>
            <v-card
              elevation="1"
              max-width="400"
              class="mx-auto"
            >
            <v-virtual-scroll
                :items="labelledEntities"
                height="330"
                item-height="45"
              >
               <template v-slot:default="{ item, index }">
                  <v-list-item :key="index">
                    <v-list-item-action>
                      <v-avatar
                        left
                        small
                        size="20"
                        color="green"
                        >
                       {{ index+1 }}
                        </v-avatar>
                    </v-list-item-action>

                    <v-list-item-content class="labelled-entity-list">
                      <v-list-item-title>
                        <h5>
                        <strong>{{ item.text }}</strong>
                        </h5>
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-icon small>
                        mdi-delete
                      </v-icon>
                    </v-list-item-action>
                  </v-list-item>

                  <v-divider></v-divider>
                </template>
              </v-virtual-scroll>
            </v-card>
          </div>
        </v-card>
      </v-col>

      <!-- CLEANING COLUMN -->
      <v-col
        sm="6"
        md="6"
        xl="7"
        style="background-color: inigo"
      >
        <v-card class="rounded-sm clinical-text-card" style="min-height: 500px;">
          <div class="text-overline mb-4">
            Clinical Text
          </div>
          <v-row>
            <v-col
              cols="12"
              sm="9"
              xl="10"
            >
              <v-textarea
              filled
              outlined
              :value="clinicalText.note"
              label="Notes"
              rows="14"
              row-height="20"
              no-resize
              readonly
              ></v-textarea>
            </v-col>
            <v-col
              cols="12"
              xl="1"
              sm="3"
            >
            <v-row dense>
              <span v-for="(label, index) in labelConfigurations"
                class="label-box"
                :key=index>
                <v-chip
                    label
                    small
                    outlined
                    :border-color="label.color"
                    :color="label.color"
                  >
                  <strong> {{label.text}} <sup>[{{label.shortcut}}]</sup></strong>
                </v-chip>
              </span>
            </v-row>
            </v-col>
          </v-row>
       </v-card>
      <v-card class="rounded-sm clinical-model-card" style="height: 305px;">
        <div class="text-overline mb-4">
          Clinical Data Model
        </div>
        <v-card dense class="clinical-model-tabs">
          <v-tabs
            v-model="tab"
            dense
            small
            background-color="transparent"
            grow
          >
            <v-tab
              flat
              dense
              v-for="item in clinicalModel"
              :key="item.domain"
            >
              {{ item.domain}}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="item in items"
              :key="item.tab"
            >
              <v-card flat>
                <v-card-text>{{ item.tab}}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
       </v-card>
      </v-col>

      <!-- SEARCHING COLUMN -->
      <v-col
        sm="3"
        md="3"
        xl="3"
        style="background-color: yellw"
      >
        <v-card class="rounded-sm search-card" style="min-height: 570px;">
          <div class="text-overline mb-4">
            Knowledge Base
          </div>
          <v-row no-gutters style="background-color: rd">
            <v-col
              class="d-flex"
              xl="8"
              sm="7">
            <v-text-field
              append-icon="mdi-magnify"
              single-line
              outlined
              dense
              label="Search"
              class="rounded-r-0 rounded-l-md d-flex"
              required></v-text-field>
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              style="margin-left: -1px"
              xl="4"
              sm="5">
              <v-select
                class="rounded-l-0 rounded-r-md"
                :items="vocabularies"
                :model="vocabularies"
                name="label"
                item-text="label"
                dense
                outlined
                label="Vocabulary">
              </v-select>
            </v-col>
          </v-row>
          <div>
            <v-card
              elevation="1"
              max-width="400"
              class="mx-auto"
            >
            <v-virtual-scroll
                :items="searchEntities"
                height="400"
                item-height="45"
              >
               <template v-slot:default="{ item, index }">
                  <v-list-item :key="index">
                    <v-list-item-action>
                      <v-avatar
                        left
                        small
                        size="20"
                        color="orange"
                        >
                       {{ index+1 }}
                        </v-avatar>
                    </v-list-item-action>

                    <v-list-item-content class="labelled-entity-list">
                      <v-list-item-title>
                        <h5>
                        <strong>{{ item.text }}</strong>
                        </h5>
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                      <a href="" class="nav-link">
                      <v-icon small>
                        mdi-help-circle-outline
                      </v-icon>
                      </a>
                    </v-list-item-action>

                  </v-list-item>
                  <v-divider></v-divider>
                </template>
              </v-virtual-scroll>
            </v-card>
          </div>
        </v-card>
        <v-card class="rounded-sm search-summary-card">
          <div class="text-overline mb-4">
            SUMMARY
          </div>
          <div class="summary-match-text">
            <v-row class="mb-3">
                <h5>Text</h5>
                <v-spacer></v-spacer>
                <v-chip
                    color="green"
                    text-color="green"
                    outlined
                    label
                >
                {{ selectedEntity.text }}
                </v-chip>
            </v-row>
            <v-row class="mb-2">
                <h5>Match</h5>
                <v-spacer></v-spacer>
                <v-chip
                    color="green"
                    text-color="green"
                    outlined
                    label
                >
                {{ selectedEntity.label }}
                </v-chip>
                &nbsp;
                &nbsp;
                <v-icon color="red">mdi-delete</v-icon>
            </v-row>
            <v-row class="mb-2">
                <h5>Vocabulary</h5>
                <v-spacer></v-spacer>
                SNOMED CT
            </v-row>
            <v-row class="mb-2">
                <h5>Domain</h5>
                <v-spacer></v-spacer>
                Condition
            </v-row>
          </div>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import PageHeader from '../../components/ui/PageHeader.vue';

export default {
  name: 'ProjectWorkplace',
  components: {
    PageHeader,
  },
  methods: {
    findLabelColor(label) {
      if (label === 'condition') {
        this.labelColor = 'green';
      } else {
        this.labelColor = '';
      }
      return this.labelColor;
    },
  },
  data() {
    return {
      drawer: true,
      headerTitle: 'Annotation Workspace',
      mini: true,
      labelColor: '',
      progress: {
        total: 78,
      },
      clinicalText: {
        note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        `,
      },
      clinicalModel: [
        { domain: 'Condition' },
        { domain: 'Medication' },
        { domain: 'Procedure' },
        { domain: 'Measurement' },
        { domain: 'Observation' },
      ],
      labelConfigurations: [
        { text: 'medication', shortcut: '1', color: 'orange' },
        { text: 'condition', shortcut: '2', color: 'purple' },
        { text: 'laboratory test', shortcut: '3', color: 'indigo' },
        { text: 'laboratory result', shortcut: '4', color: 'green' },
        { text: 'medication', shortcut: '1', color: 'orange' },
        { text: 'condition', shortcut: '2', color: 'purple' },
        { text: 'laboratory test', shortcut: '3', color: 'indigo' },
        { text: 'laboratory result', shortcut: '4', color: 'green' },
        { text: 'laboratory result', shortcut: '4', color: 'green' },
        { text: 'laboratory result', shortcut: '4', color: 'green' },
        { text: 'laboratory result', shortcut: '4', color: 'green' },
        { text: 'laboratory result', shortcut: '4', color: 'green' },
      ],
      selectedEntity: {
        label: 'condition',
        text: 'diabetes mellitus',
      },
      labelledEntities: [
        { label: 'condition', text: 'Diabetes Mellitus' },
        { label: 'medication', text: 'Metformin' },
        { label: 'laboratory', text: 'creatinine' },
        { label: 'medication', text: 'Metropolol' },
        { label: 'condition', text: 'Gestational Diabetes' },
        { label: 'laboratory', text: 'Hba1c' },
        { label: 'laboratory', text: 'fasting blood sugar' },
        { label: 'condition', text: 'Family history of Diabetes' },
        { label: 'condition', text: 'history of Hypertension' },
      ],
      searchEntities: [
        { label: 'condition', text: 'Gestational Diabetes' },
        { label: 'condition', text: 'Diabetes Mellitus' },
        { label: 'condition', text: 'Insulin treated type 2 diabetes mellitus' },
        { label: 'condition', text: 'Diabetes type 2 on insulin' },
        { label: 'condition', text: 'Diabetes type 2, uncomplicated' },
        { label: 'condition', text: 'Diabetes type 2, without retinopathy' },
        { label: 'condition', text: 'Diabetic foot exam' },
        { label: 'condition', text: 'Dietary diabetic patient education' },
        { label: 'condition', text: 'Type 2 diabetes mellitus controlled by diet' },
        { label: 'condition', text: 'Type 2 diabetes mellitus controlled by diet' },
        { label: 'condition', text: 'Type 2 diabetes mellitus without complication' },
      ],
      vocabularies: [
        { label: 'SNOMED CT', value: 'snomedct' },
      ],
    };
  },
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 10;
    },
  },
};
</script>
<style scoped>
.annotation-workspace-container {
  margin-top: 55px;
  min-width: 100%;
}
.annotation-workspace-title {
  padding-left: 30px;
  text-align: center;
}

.annotation-workspace-header {
  height: 50px;
  background-color: pik;
  width: 100%;
}

.progress-card {
  padding: 20px;
}
.progress-text {
  padding-left: 15px;
  padding-right: 15px;
}
.entity-match-text {
  padding-left: 15px;
  line-height: 30px;
  padding-right: 15px;
}
.summary-match-text {
  padding-left: 15px;
  padding-right: 15px;
  line-height: 30px;
}

.clinical-text-card {
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
}
.clinical-model-card {
  margin-top: 20px;
  padding-top: 20px;
  padding-left: 20px;
}
.entity-match-card {
  margin-top: 10px;
  padding: 20px;
}
.labelled-entity-card {
  margin-top: 10px;
  padding: 20px;
}
.labelled-entity-list {
  margin-left: -25px;
}
.clinical-card {
  padding: 20px;
}
.clinical-model-tabs {
  margin-left: -10px;
}
.label-box {
  line-height: 35px;
  margin-left: -5px;
}

.search-card,
.search-summary-card {
  margin-bottom: 10px;
  padding: 20px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
