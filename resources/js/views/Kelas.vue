<template>
    <div>
        <!-- Heading -->
        <div class="text-h4">Data Kelas</div>
        <br />

        <!-- Button Data Baru -->
        <v-btn color to=/tambah-kelas>
            <div class="text-overline">Tambah Data Baru</div>
        </v-btn>
        <br />
        <br />
        <!-- Card Data Table -->
        <v-card loading="isLoadingData">
            <!-- Skeleton Loader -->
            <v-skeleton-loader
                class="ma-3"
                :loading="isLoadingData"
                type="table-thead, table-row@6"
            >
                <!-- Card Title -->
                <v-card-title>
                    <!-- Search Bar -->
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                </v-card-title>
                <!-- Data Table -->
                <v-data-table
                    dense
                    :headers="headers"
                    :items="kelas"
                    :search="search"
                    show-group-by
                    :items-per-page="5">

                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editKelas(item.kd_kelas)">mdi-pencil</v-icon>
                        <v-icon small @click="deleteKelas(item.kd_kelas)">mdi-delete</v-icon>
                    </template>

                ></v-data-table>
            </v-skeleton-loader>
        </v-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLoadingData: false,
      search: "",
      kelas: [],
      headers: [
        {
          text: "Kode Kelas",
          align: "start",
          sortable: true,
          groupable: false,
          value: "kd_kelas",
        },
        {
          text: "Tingkat Kelas",
          value: "tingkat_kelas",
          sortable: true,
          groupable: false,
        },
        {
          text: "Program Studi",
          value: "prodi",
          sortable: true,
          groupable: false,
        },
        {
          text: "Angkatan",
          value: "angkatan",
          sortable: true,
          groupable: false,
        },
        {
          text: "Nama Wali Dosen",
          value: "wali_dosen.nama_dosen",
          sortable: true,
          groupable: false,
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          groupable: false,
        },
      ],
    };
  },
  created() {
    this.loadDataKelas();
    document.title = "Kelas | BePresensi";
  },
  methods: {
    async loadDataKelas() {
      // menampilkan loading
      this.isLoadingData = true;

      // fetch data dari api menggunakan axios
      axios
        .get("http://127.0.0.1:8000/api/kelas")
        .then((response) => {
          // mengirim data hasil fetch ke varibale array kelas
          this.kelas = response.data.data.kelas;
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          // mengakhiri loading
          this.isLoadingData = false;
        });
    },

    editKelas(id) {
      this.$router.push({
        name: "edit-kelas",
        params: { kd_kelas: id },
      });
    },

    deleteKelas(id) {
      axios
        .delete("http://127.0.0.1:8000/api/kelas/" + id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.loadDataKelas();
    },
  },
};
</script>
