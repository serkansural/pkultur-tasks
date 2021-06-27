<template>
  <form>
    <input type="text" v-model="newRow.id" placeholder="id">
    <input type="text" v-model="newRow.firstName" placeholder="first name">
    <input type="text" v-model="newRow.lastName" placeholder="last name">
    <input type="text" v-model="newRow.details.age" placeholder="age">
    <input type="button" value="Add" @click="AddNewRow()">
  </form>
  <table>
    <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age Name</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in dataSet" :key="row.id">
      <td>{{ row.id }}</td>
      <td>{{ row.firstName }}</td>
      <td>{{ row.lastName }}</td>
      <td>{{ row.details.age }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Seven',
  props: ['data'],
  data () {
    return {
      dataSet: this.data.slice(),
      newRow: this.GetNewRow(),
      copyInitial: this.data.slice()
    }
  },
  methods: {
    GetNewRow () {
      return { details: {} }
    },
    AddNewRow () {
      this.dataSet.push(this.newRow)
      this.newRow = this.GetNewRow()
    },
    Reset () {
      this.dataSet = this.copyInitial.slice()
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  th, td {
    padding: 5px;
  }
}

form {
  display: flex;
  flex-direction: column;

  input {
    width: 70%;
    margin-bottom: 5px;
  }
}
</style>
