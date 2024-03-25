function getChartColorsArray(e){var a=document.getElementById(e);if(a){a=a.dataset.colors;if(a)return JSON.parse(a).map(e=>{var a=e.replace(/\s/g,"");return a.includes(",")?2===(e=e.split(",")).length?`rgba(${getComputedStyle(document.documentElement).getPropertyValue(e[0])}, ${e[1]})`:a:getComputedStyle(document.documentElement).getPropertyValue(a)||a});console.warn("data-colors attribute not found on: "+e)}}var pageViewsOverviewChart="",salesReportChart="",weeklyVisitorsChart="",sessionCountryChart="",salesFunnelChart="",teamPerformanceChart="",chartBubbleSimpleChart="";function loadCharts(){(r=getChartColorsArray("pageviews_overview"))&&(t={series:[{name:"Website",data:[12,14,28,25,19,23,21,23,20,18,12,28,28,25,19,23,18,29,23,27,18,29,23,25,20,30,23,29,22,27,33]},{name:"Social Media",data:[26,24,18,29,23,27,24,27,22,25,24,29,18,29,23,27,18,29,23,29,14,14,18,29,18,29,21,27,29,23,24]}],chart:{type:"bar",height:250,stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"60%",borderRadius:5,lineCap:"round",borderRadiusOnAllStackedSeries:!0}},colors:r,fill:{opacity:1},dataLabels:{enabled:!1,textAnchor:"top"},grid:{padding:{top:-20,right:0}},legend:{show:!1,position:"top",horizontalAlign:"right"},xaxis:{type:"datetime",categories:["06/01/2023 GMT","06/02/2023 GMT","06/03/2023 GMT","06/04/2023 GMT","06/05/2023 GMT","06/06/2023 GMT","06/07/2023 GMT","06/08/2023 GMT","06/09/2023 GMT","06/10/2023 GMT","06/11/2023 GMT","06/12/2023 GMT","06/13/2023 GMT","06/14/2023 GMT","06/15/2023 GMT","06/16/2023 GMT","06/17/2023 GMT","06/18/2023 GMT","06/19/2023 GMT","06/20/2023 GMT","06/21/2023 GMT","06/22/2023","06/23/2023","06/24/2023","06/25/2023","06/26/2023","06/27/2023","06/28/2023","06/29/2023","06/30/2023","06/31/2023"],labels:{rotate:-90},axisTicks:{show:!0},axisBorder:{show:!0,stroke:{width:1}}}},""!=pageViewsOverviewChart&&pageViewsOverviewChart.destroy(),(pageViewsOverviewChart=new ApexCharts(document.querySelector("#pageviews_overview"),t)).render()),(r=getChartColorsArray("sales_Report"))&&(t={series:[{name:"Order",data:[45,74,36,69,84,97,92]},{name:"Return",data:[11,18,24,32,46,65,73]}],chart:{height:225,type:"area",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:0}},legend:{show:!1,position:"top",horizontalAlign:"right",offsetY:"-50px"},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.4,opacityTo:0}},dataLabels:{enabled:!1},stroke:{curve:"stepline"},colors:r,xaxis:{type:"datetime",categories:["02/01/2023 GMT","02/02/2023 GMT","02/03/2023 GMT","02/04/2023 GMT","02/05/2023 GMT","02/06/2023 GMT","02/07/2023 GMT"]}},""!=salesReportChart&&salesReportChart.destroy(),(salesReportChart=new ApexCharts(document.querySelector("#sales_Report"),t)).render()),(r=getChartColorsArray("weekly_visitors"))&&(t={series:[{name:"Visitors",data:[80,87,67,110,40,87]},{name:"Returning Visitors",data:[20,30,40,80,20,80]}],chart:{height:335,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1},toolbar:{show:!1}},stroke:{width:2},fill:{opacity:.2},markers:{size:0},colors:r,xaxis:{categories:["2017","2018","2019","2020","2022","2023"]}},""!=weeklyVisitorsChart&&weeklyVisitorsChart.destroy(),(weeklyVisitorsChart=new ApexCharts(document.querySelector("#weekly_visitors"),t)).render());function e(e,a){for(var t=0,r=[];t<e;){var o=(t+1).toString(),n=Math.floor(Math.random()*(a.max-a.min+1))+a.min;r.push({x:o,y:n}),t++}return r}(r=getChartColorsArray("session_country"))&&(t={series:[{name:"Jan",data:e(12,{min:0,max:90})},{name:"Feb",data:e(12,{min:0,max:90})},{name:"Mar",data:e(12,{min:0,max:90})},{name:"Apr",data:e(12,{min:0,max:90})},{name:"May",data:e(12,{min:0,max:90})},{name:"Jun",data:e(12,{min:0,max:90})},{name:"Jul",data:e(12,{min:0,max:90})},{name:"Aug",data:e(12,{min:0,max:90})},{name:"Nov",data:e(12,{min:0,max:90})}],chart:{height:300,type:"heatmap",toolbar:{show:!1}},dataLabels:{enabled:!1},colors:[r[0]],grid:{padding:{top:-22,right:0,bottom:0}},stroke:{colors:[r[1]]}},""!=sessionCountryChart&&sessionCountryChart.destroy(),(sessionCountryChart=new ApexCharts(document.querySelector("#session_country"),t)).render());[{name:"W1",data:e(8,{min:0,max:90})},{name:"W2",data:e(8,{min:0,max:90})},{name:"W3",data:e(8,{min:0,max:90})},{name:"W4",data:e(8,{min:0,max:90})},{name:"W5",data:e(8,{min:0,max:90})},{name:"W6",data:e(8,{min:0,max:90})},{name:"W7",data:e(8,{min:0,max:90})},{name:"W8",data:e(8,{min:0,max:90})},{name:"W9",data:e(8,{min:0,max:90})},{name:"W10",data:e(8,{min:0,max:90})},{name:"W11",data:e(8,{min:0,max:90})},{name:"W12",data:e(8,{min:0,max:90})},{name:"W13",data:e(8,{min:0,max:90})},{name:"W14",data:e(8,{min:0,max:90})},{name:"W15",data:e(8,{min:0,max:90})}].reverse(),(r=getChartColorsArray("sales_funnel"))&&(t={series:[44,55,41,17],chart:{height:325,type:"donut"},labels:["Prospects","Leads","Sales","Deals"],legend:{position:"bottom"},dataLabels:{dropShadow:{enabled:!1}},colors:r},""!=salesFunnelChart&&salesFunnelChart.destroy(),(salesFunnelChart=new ApexCharts(document.querySelector("#sales_funnel"),t)).render());function a(e,a,t){for(var r=0,o=[];r<a;){var n=Math.floor(750*Math.random())+1,s=Math.floor(Math.random()*(t.max-t.min+1))+t.min,i=Math.floor(61*Math.random())+15;o.push([n,s,i]),r++}return o}(r=getChartColorsArray("team_performance"))&&(t={series:[83],chart:{type:"radialBar",height:315,sparkline:{enabled:!0}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"80%"},dataLabels:{name:{show:!1},value:{offsetY:-15,fontWeight:"bold",fontSize:"18px"}}}},grid:{padding:{top:-20}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.4,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"],colors:r},""!=teamPerformanceChart&&teamPerformanceChart.destroy(),(teamPerformanceChart=new ApexCharts(document.querySelector("#team_performance"),t)).render());var t,r;(r=getChartColorsArray("simple_bubble"))&&(t={series:[{name:"Users",data:a(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Conversation",data:a(new Date("12 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chart:{height:300,type:"bubble",toolbar:{show:!1}},dataLabels:{enabled:!1},fill:{opacity:.8},grid:{padding:{top:-18}},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70},colors:r},""!=chartBubbleSimpleChart&&chartBubbleSimpleChart.destroy(),(chartBubbleSimpleChart=new ApexCharts(document.querySelector("#simple_bubble"),t)).render())}window.addEventListener("resize",function(){setTimeout(()=>{loadCharts()},250)}),loadCharts();