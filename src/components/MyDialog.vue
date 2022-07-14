<template >
    <div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <!--  @change="pickFn" -->
                <el-form-item label="日期" :label-width="formLabelWidth">
                    <el-date-picker  @change="pickFn"  v-model="form.date" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelfn">取 消</el-button>
                <el-button type="primary" @click="confirmfn">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import moment from "moment"
export default {
    name: 'MyDialog',
    props: ['form', 'dialogFormVisible', 'formLabelWidth'],
    methods: {
        confirmfn() {
            this.$emit('confirmfn_my')
            // confirmfn_my 事件名
        },
        cancelfn(){
             this.$emit('my_cancel')
        },
        // 修改时间
        pickFn() {
            this.form.date = moment(this.form.date).format("YYYY-MM-DD")
        },
    }
}
</script>
<style lang="scss" scoped>
</style>