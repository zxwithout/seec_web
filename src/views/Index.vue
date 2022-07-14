<template lang="">
    <div>
        <!-- 数据的增删改查 -->
         <el-table :data="tableData" style="width: 100%" >
            <el-table-column width="100px" align="center"
              label="日期"
              prop="date">
            </el-table-column>
            <el-table-column width="100px" align="center"
              label="姓名"
              prop="name">
            </el-table-column>
            <el-table-column width="400px" align="center"
              label="地址"
              prop="address">

              <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
              </template>
            
            </el-table-column>
             <el-table-column width="300px" align="right" label="修改">
              <template slot-scope="scope">
                    <div>
                      <el-button size="mini" @click="handleEdit(scope)">Edit</el-button>
                      <el-button size="mini" type="danger" @click="handleDelete(scope)">Delete</el-button>
                    </div>
              </template>
            </el-table-column>
        </el-table>
        <div>
          <el-button @click="addfn">增加新用户</el-button>
        </div>
        <!-- 修改的弹窗 -->
        <MyDialog @my_cancel="cancelfn" @confirmfn_my="confirmfn" :form="form" :dialogFormVisible="dialogFormVisible" :formLabelWidth="formLabelWidth"></MyDialog>
        <!-- 增加的弹窗 -->
        <AddDialog @my_addcancel="addcancelfn" @my_addconfirmfn="addconfirmfn" :addform="addform" :incrementform="incrementform" :formLabelWidth="formLabelWidth"></AddDialog>
        <!-- <button @click="getKan">查看数据改了没</button> -->
    </div>
</template>
<script>
import instance from "@/api/api";
import MyDialog from "@/components/MyDialog.vue";
import AddDialog from "@/components/AddDialog.vue";

// import moment/ from "moment"
import dayjs from "dayjs"

export default {
  data() {
    return {
      tableData: [],
      search: '',
      dialogFormVisible: false, //表单的显示隐藏
      form: {
        date: null,
        name: null,
        address: '',
        index: 0
      }, // 表单的内容
      formLabelWidth: '120px',
      incrementform: false, //决定增加表单的显示隐藏
      addform: {
        date: null,
        name: '',
        address: ''
      },// 增加表单绑定到数据
    };
  },
  components: { MyDialog,AddDialog },
  created() {
    this.getall()
  },
  methods: {
    /* getKan(){
       instance.get('/all').then(res=>{console.log(res);})
     },
     */
    addfn() {
      this.incrementform = true
    },
    addcancelfn() { this.incrementform = false },
    addconfirmfn() {
      this.incrementfn().then(() => {
        this.$message({
          type: "success",
          message: '添加成功',
          duration:3000,
          onClose: () => {
            this.incrementform = false
            this.getall()
          }
        })
      }).catch(() => {
        this.$message({
          type: "error",
          message: '添加失败'
        })
      })
    },
    handleEdit(scope) {
      // console.log(scope.row);
      this.form = scope.row
      this.form.index = scope.$index
      this.dialogFormVisible = true
    },
    handleDelete(scope) {
      // console.log(scope);
      // this.deletefn(scope.$index)
      this.$confirm("确定删除吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deletefn(scope.$index).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // pickFn() {
    //   this.addform.date = moment(this.addform.date).format("YYYY-MM-DD")
    // },
    // 确定
    confirmfn() {
      this.dialogFormVisible = false
      this.form.date = dayjs(new Date(this.form.date)).format('YYYY-MM-DD')
      this.updatefn()
    },
    // 取消
    cancelfn() {
      this.dialogFormVisible = false
    },
    // 增加业务
    async incrementfn() {
      let { date, name, address } = this.addform
      let { data } = await instance.post('/add', { date, name, address })
      console.log('增加的业务', data);
    },
    // 修改业务
    async updatefn() {
      let { date, name, address, index } = this.form
      let { data } = await instance.put('/update', { date, name, address, index })
      console.log(data);
    },
    // 删除业务
    async deletefn(index) {
      let { data } = await instance.delete('/delete', { params: { index } })
      this.getall()
    },
    // 请求业务
    async getall() {
      let { data } = await instance.get('/all')
      this.tableData = data.data
    },
  }

};
</script>
<style lang="scss" scoped>
</style>