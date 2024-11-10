<template>
  <div id="my-echarts" class="echarts">

  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
let myEcharts = ref(null)
let option = {
  title: {
    text: 'ECharts 入门示例'
  },

  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '啊啊'],
    // axisPointer: {
    //   type: 'shadow'
    // },
    alwaysShowContent: true,

    axisLabel: {
      fontSize: 8
    }
  },
  yAxis: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      // axis:'radius'
    },
    position: (point, params, dom, rect, size) => {
      // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
      // 提示框位置
      let x = 0; // x坐标位置
      let y = 0; // y坐标位置
      // 当前鼠标位置
      let pointX = point[0];
      let pointY = point[1];
      // 提示框大小
      let boxWidth = size.contentSize[0];
      let boxHeight = size.contentSize[1];
      // boxWidth > pointX 说明鼠标左边放不下提示框
      if (boxWidth > pointX) {
        x = 10;
      } else { // 左边放的下
        x = pointX - boxWidth;
      }
      // boxHeight > pointY 说明鼠标上边放不下提示框
      if (boxHeight > pointY) {
        y = 10;
      } else { // 上边放得下
        y = pointY - boxHeight;
      }
      return [x, y];
    },
    enterable: true,
    formatter: function(params) {
      
      return `<div onclick="myDialog('${params[0].data}')">${params[0].seriesName}</div><br/>
            <div onclick="myDialog('${params[1].data}')">${params[1].seriesName}</div>
          `
    }

  },
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [1, 20, 0, 10, 10, 0, 90],
      //showBackground: true,
      itemStyle: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10

      }
    },
    {
      name: '销量2',
      type: 'bar',
      data: [121, 1, 12, 12, 222, 11, 1],
    },
  ]
}
//渲染图表
function render(params) {
  myEcharts.setOption(option);


  // myEcharts.getZr().on('click', params => {
  //   const pointInPixel = [params.offsetX, params.offsetY];
  //   if (myEcharts.containPixel('grid', pointInPixel)) {
  //     let xIndex = myEcharts.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0];

  //     let name = myEcharts.getOption().xAxis[0].data[xIndex]
  //     console.log(xIndex);

  //     return
  //     option.series[0].itemStyle = {
  //       normal: {
  //         color: function (params) {
  //           //判断选中的名字改变柱子的颜色样式
  //           if (name === params.name) {
  //             return '#2f4554';
  //           } else {
  //             return '#5470c6';
  //           }
  //         }
  //       }
  //     }

  //     myEcharts.setOption(option);
  //   }
  // });

}
let num= ref(100);

onMounted(() => {

  window.myDialog= function(title) {
    // 写你的逻辑 我这里该页面以子组件存在父组件中，触发的父组件中的一个方法 该方法里写的展示弹窗的相关逻辑
    console.log(title,num);
    
  }
  //初始化图表
  if (myEcharts.value == null) {


    myEcharts = echarts.init(document.getElementById('my-echarts'));
    //渲染
    render()
  }






})


</script>
<style>
#my-echarts {
  width: 600px;
  height: 400px;

}
</style>
