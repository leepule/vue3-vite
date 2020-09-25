<template>
  <a-table :columns="columns" :data-source="data" @change="change" size="small" bordered>
    <template
      v-for="col in ['name', 'age', 'address']"
      v-slot:[col]="{ text, record, index }"
    >
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="(e) => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template v-slot:operation="{ text, record, index }">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a
            v-bind="editingKey !== '' ? { disabled: 'disabled' } : {}"
            @click="edit(record.key)"
          >
            Edit
          </a>
        </span>
      </div>
    </template>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "name",
    dataIndex: "name",
    width: "25%",
    slots: { customRender: "name" },
  },
  {
    title: "age",
    dataIndex: "age",
    width: "15%",
    slots: { customRender: "age" },
  },
  {
    title: "address",
    dataIndex: "address",
    width: "40%",
    slots: { customRender: "address" },
  },
  {
    title: "operation",
    dataIndex: "operation",
    slots: { customRender: "operation" },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export default {
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      data,
      columns,
      editingKey: "",
    };
  },
  setup() {
    const change = (pagination, filters, sorter, { currentDataSource }) => {
      console.log(pagination, filters, sorter, currentDataSource )
    }
    return {
      change
    }
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter((item) => key === item.key)[0];
      const targetCache = newCacheData.filter((item) => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = "";
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = "";
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter((item) => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
