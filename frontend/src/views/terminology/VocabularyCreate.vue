<template>
  <v-container class="generic-container">
    <go-back-header :headerTitle="headerTitle"></go-back-header>
    <v-card class="rounded-0">
      <v-row class="">
        <v-col cols="12" style="background-color: ed" class="valueset-search">
          <v-tabs vertical>
              <v-tab
              grow
              v-model="activeTab"
              class="active-class vocabulary-server">
                <v-icon left>
                  mdi-database-search
                </v-icon>
                ElasticSearch Server
                <v-spacer></v-spacer>
                <v-icon >
                  mdi-chevron-right
                </v-icon>
              </v-tab>
              <v-tab
              grow
              v-model="activeTab"
              class="active-class vocabulary-server">
                <v-icon left>
                  mdi-graph
                </v-icon>
                Graph Server
                <v-spacer></v-spacer>
                <v-icon right style="align-end: right">
                  mdi-chevron-right
                </v-icon>
              </v-tab>
            <!-- <v-tab style="d-flex: left; ">
              <v-icon left>
                mdi-account
              </v-icon>
              Postgres Server
            </v-tab>
            <v-tab>
              <v-icon left>
                mdi-access-point
              </v-icon>
              Grpah Database Server
            </v-tab> -->

            <!-- ELASTIC SERVER -->
            <v-tab-item>
              <v-card flat>
                <v-col cols="10">
                  <v-card-text md="10" style="background-color: geen">
                  <form style="background-color: rd">
                    <v-text-field
                      outlined
                      dense
                      label="Vocabulary Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Index Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Semantic Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Google Drive Schema URL"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Google Drive Datasource URL"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Destination URL"
                      required
                    ></v-text-field>
                    <v-btn
                      class="mr-4 primary">
                      submit
                    </v-btn>
                    <v-btn
                      class="mr-4">
                      clear
                    </v-btn>
                    </form>
                  </v-card-text>
                </v-col>
              </v-card>
            </v-tab-item>
            <!-- GRAPH SERVER -->
            <v-tab-item>
              <v-card flat>
                <v-col cols="10">
                  <v-card-text md="10" style="background-color: geen">
                  <form style="background-color: rd">
                    <v-text-field
                      outlined
                      dense
                      label="Vocabulary Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Index Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Semantic Name"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Google Drive Schema URL"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Google Drive Datasource URL"
                      required
                    ></v-text-field>
                    <v-text-field
                      outlined
                      dense
                      label="Destination URL"
                      required
                    ></v-text-field>
                    <v-btn
                      class="mr-4">
                      submit
                    </v-btn>
                    <v-btn
                      class="mr-4">
                      clear
                    </v-btn>
                    </form>
                  </v-card-text>
                </v-col>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>
                    Fusce a quam. Phasellus nec
                  </p>
                  <p class="mb-0">
                    Cras sagittis. Phasellus nec
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import GoBackHeader from '../../components/ui/GoBackHeader.vue';

export default {
  name: 'VocabularyCreate',
  components: {
    GoBackHeader,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      activeTab: true,
      headerTitle: 'Create Vocabulary',
      headers: [
        {
          text: 'Index',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Index name', value: 'indexName' },
        { text: 'version', value: 'version' },
        { text: 'Environment', value: 'environment' },
        { text: 'Status', value: 'status' },
        { text: 'Date Created', value: 'dateCreated' },
        { text: 'Storage', value: 'storage' },
        { text: 'URL', value: 'url' },
      ],
      vocabularies: [
        {
          name: 'Medication List',
          indexName: 'medication-2021.v5.0.0',
          version: 'v5.0.0',
          environment: 'production',
          status: 'active',
          dateCreated: '2021-06-15',
          storage: 'ElasticSearch',
          url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
        },
        {
          name: 'Diagnosis List',
          indexName: 'diagnosis-2021.v5.0.0',
          version: 'v5.0.0',
          environment: 'production',
          status: 'active',
          dateCreated: '2021-06-15',
          storage: 'ElasticSearch',
          url: 'https://34.87.79.18:9200/diagnosis-2021.v5.0.0',
        },
        {
          name: 'Procedure List',
          indexName: 'procedure-2021.v5.0.0',
          version: 'v5.0.0',
          environment: 'production',
          status: 'active',
          dateCreated: '2021-06-15',
          storage: 'ElasticSearch',
          url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
        },
        {
          name: 'Problem or Complaint List',
          indexName: 'problem-2021.v5.0.0',
          version: 'v5.0.0',
          environment: 'production',
          status: 'active',
          dateCreated: '2021-06-15',
          storage: 'ElasticSearch',
          url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
        },
      ],
    };
  },
};
</script>
<style scoped>
.vocabulary-server {
  padding: 30px;
  background-color: rxed;
  width: 300px;
  min-height: 70px;
  text-align: left;
  display: inherit;
}

</style>
