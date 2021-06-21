<!--
 * @Author: tianhao
 * @LastEditors: tianhao
 * @Date: 2021-04-22 14:39:54
 * @LastEditTime: 2021-04-28 14:23:53
 * @Email: 275819790@qq.com
 * @FilePath: \web-admin\src\views\outline\index.vue
 * @Environment: vue 2.0
 * @Description: 概览
-->
<template>
  <div>
    <!-- <h2>概览</h2> -->
    <div class="table-container-one">
      <!-- <el-row :gutter="10" style="height: 100%"> -->
        <!-- <el-col :span="6" style="height: 100%"> -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>总流量</span>
            </div>
            <div style="text-align: center">
              <p class="bk_p1">{{ charData.b }}</p>
            </div>
          </el-card>
        <!-- </el-col> -->
        <!-- <el-col :span="6" style="height: 100%"> -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>异常流量</span>
            </div>
            <div style="text-align: center">
              <p class="bk_p1">{{ charData.e }}</p>
            </div>
          </el-card>
        <!-- </el-col> -->
        <!-- <el-col :span="6" style="height: 100%"> -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>近七日总流量</span>
            </div>
            <div style="text-align: center">
              <p class="bk_p1">{{ charData.g }}</p>
            </div>
          </el-card>
        <!-- </el-col> -->
        <!-- <el-col :span="6" style="height: 100%"> -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>资源数量</span>
            </div>
            <div style="text-align: center">
              <p class="bk_p1">{{ charData.c }}</p>
            </div>
          </el-card>
        <!-- </el-col> -->
      <!-- </el-row> -->
    </div>
    <div class="table-container-two">
      <!-- <el-row :gutter="10" style="height: 100%">
        <el-col :span="8" style="height: 100%"> -->
          <el-card class="box-card-two">
            <div slot="header" class="clearfix">
              <span>终端数量</span>
            </div>
            <div style="text-align: center">
              <p class="bk_p1">{{ charData.a }}</p>
            </div>
          </el-card>
        <!-- </el-col> -->
        <!-- <el-col :span="8" style="height: 100%"> -->
          <el-card class="box-card-two">
            <div slot="header" class="clearfix">
              <span>近七日活跃终端数</span>
            </div>
            <div style="text-align: center">
              <p class="bk_p1">{{ charData.f }}</p>
            </div>
          </el-card>
        <!-- </el-col> -->
        <!-- <el-col :span="8" style="height: 100%"> -->
          <el-card class="box-card-two">
            <div slot="header" class="clearfix">
              <span>异常终端</span>
            </div>
            <div style="text-align: center">
              <p class="bk_p1">{{ charData.d }}</p>
            </div>
          </el-card>
        <!-- </el-col>
      </el-row> -->
    </div>
    <div class="table-container-three">
      <el-row :gutter="10" style="height: 100%">
        <el-col :span="12" style="height: 100%">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>被访问资源Top10(访问次数)</span>
            </div>
            <div ref="line1" style="width: 100%; height: 18rem" />
          </el-card>
        </el-col>
        <el-col :span="12" style="height: 100%">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>被访问资源Top10(访问流量)</span>
            </div>
            <div ref="line2" style="width: 100%; height: 18rem" />
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      charData: {
        a: 1000,
        b: '208G',
        c: 856041,
        d: 15,
        e: '500M',
        f: 809,
        g: '101G',
      },
      charData2: [
        {
          name: '设备1',
          value: 70,
        },
        {
          name: '设备2',
          value: 68,
        },
        {
          name: '设备3',
          value: 48,
        },
        {
          name: '设备4',
          value: 40,
        },
        {
          name: '设备5',
          value: 32,
        },
        {
          name: '设备6',
          value: 27,
        },
        {
          name: '设备7',
          value: 18,
        },
        {
          name: '设备8',
          value: 18,
        },
        {
          name: '设备9',
          value: 18,
        },
        {
          name: '设备10',
          value: 18,
        },
      ],
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(this.$refs.line1)
      let myChart2 = this.$echarts.init(this.$refs.line2)
      // 绘制图表
      myChart1.setOption(
        {
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: '访问次数',
              type: 'pie',
              radius: '100%',
              data: this.charData2,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        },
        true
      )
      myChart2.setOption(
        {
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
            {
              name: '访问流量',
              type: 'pie',
              radius: '100%',
              data: this.charData2,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        },
        true
      )
      window.addEventListener('resize', () => {
        myChart1.resize()
        myChart2.resize()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
// .text {
//   font-size: 14px;
// }

// .table-container-one {
//   padding-top: 2px;
//   margin-bottom: 1rem;
//   height: 12rem;
// }
// .table-container-two {
//   padding-top: 2px;
//   margin-bottom: 1rem;
//   height: 12rem;
// }
// .table-container-three {
//   padding-top: 2px;
//   margin-bottom: 1rem;
//   height: 25rem;
// }
// .box-card {
//   /* margin: 1rem; */
//   height: 100%;
// }
// .bk_p1 {
//   position: relative;
//   top: -4.5rem;
//   font-size: 5rem;
// }
.box-card {
    height: 238px;
    flex: 0 0 295.3px;
}
.box-card-two {
    height: 238px;
    flex: 0 0 504px;
}
.table-container-one {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}
.table-container-two {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

</style>