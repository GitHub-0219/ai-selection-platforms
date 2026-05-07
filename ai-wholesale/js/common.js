/* AI Wholesale Platform - Mock Data & Utilities */
const MOCK = {
  suppliers: [
    { id:1, name:'深圳华纺织造有限公司', location:'广东深圳', rating:4.8, products:156, capacity:'50万件/月', delivery:'7-15天', credit:'A+', tags:['面料','针织','梭织'], revenue:'2.8亿' },
    { id:2, name:'杭州丝绸之源实业', location:'浙江杭州', rating:4.7, products:89, capacity:'20万件/月', delivery:'10-20天', credit:'A', tags:['丝绸','真丝','高端'], revenue:'1.5亿' },
    { id:3, name:'广州新锐服饰制造', location:'广东广州', rating:4.5, products:234, capacity:'80万件/月', delivery:'5-10天', credit:'A', tags:['快时尚','T恤','卫衣'], revenue:'3.2亿' },
    { id:4, name:'苏州精工纺织科技', location:'江苏苏州', rating:4.6, products:112, capacity:'30万件/月', delivery:'8-15天', credit:'A+', tags:['功能性','科技面料'], revenue:'1.8亿' },
    { id:5, name:'东莞时尚制衣集团', location:'广东东莞', rating:4.4, products:198, capacity:'60万件/月', delivery:'7-12天', credit:'B+', tags:['牛仔','休闲','运动'], revenue:'2.1亿' },
    { id:6, name:'绍兴柯桥布业工厂', location:'浙江绍兴', rating:4.3, products:278, capacity:'100万米/月', delivery:'3-7天', credit:'A', tags:['面料批发','坯布','印染'], revenue:'4.5亿' }
  ],
  categories: [
    { name:'女装', growth:'+18%', heat:95, revenue:'85亿' },
    { name:'男装', growth:'+12%', heat:82, revenue:'62亿' },
    { name:'童装', growth:'+22%', heat:88, revenue:'38亿' },
    { name:'运动户外', growth:'+28%', heat:90, revenue:'45亿' },
    { name:'内衣家居', growth:'+15%', heat:78, revenue:'32亿' },
    { name:'鞋靴箱包', growth:'+10%', heat:75, revenue:'55亿' }
  ],
  priceTrends: [
    { month:'1月', cotton:12.5, silk:85, polyester:8.2, wool:45 },
    { month:'2月', cotton:12.8, silk:88, polyester:8.0, wool:46 },
    { month:'3月', cotton:13.2, silk:90, polyester:7.8, wool:44 },
    { month:'4月', cotton:13.5, silk:92, polyester:7.5, wool:43 },
    { month:'5月', cotton:13.8, silk:95, polyester:7.8, wool:45 },
    { month:'6月', cotton:14.2, silk:98, polyester:8.0, wool:42 }
  ],
  forecasts: [
    { category:'新中式连衣裙', predicted:15800, confidence:92, season:'2025春夏', trend:'up' },
    { category:'极简风西装', predicted:12500, confidence:88, season:'2025春夏', trend:'up' },
    { category:'机能风外套', predicted:9800, confidence:85, season:'2025春夏', trend:'up' },
    { category:'法式碎花裙', predicted:8200, confidence:82, season:'2025春夏', trend:'stable' },
    { category:'运动休闲套装', predicted:18500, confidence:90, season:'2025春夏', trend:'up' },
    { category:'真丝衬衫', predicted:6500, confidence:78, season:'2025春夏', trend:'down' }
  ],
  inventory: [
    { sku:'NQ-2025-001', name:'新中式盘扣连衣裙', stock:2500, inbound:5000, outbound:1800, status:'充足' },
    { sku:'NQ-2025-002', name:'极简廓形西装', stock:800, inbound:3000, outbound:1200, status:'偏低' },
    { sku:'NQ-2025-003', name:'Y2K亮片吊带', stock:5000, inbound:0, outbound:2500, status:'充足' },
    { sku:'NQ-2025-004', name:'机能工装裤', stock:300, inbound:2000, outbound:800, status:'紧张' },
    { sku:'NQ-2025-005', name:'Clean Fit T恤', stock:8000, inbound:10000, outbound:5000, status:'充足' }
  ]
};

const Utils = {
  formatNum(n) { if(n>=10000)return(n/10000).toFixed(1)+'万'; if(n>=1000)return(n/1000).toFixed(1)+'k'; return n.toString(); },
  rand(min,max) { return Math.floor(Math.random()*(max-min+1))+min; },
  animateNum(el,target,dur=1000) { let s=0;const step=target/(dur/16);const t=setInterval(()=>{s+=step;if(s>=target){s=target;clearInterval(t);}el.textContent=Math.floor(s).toLocaleString();},16); },
  initSidebar() {
    const toggle=document.querySelector('.mobile-toggle'),sidebar=document.querySelector('.sidebar'),overlay=document.querySelector('.overlay');
    if(!toggle)return;
    toggle.addEventListener('click',()=>{sidebar.classList.toggle('open');overlay.classList.toggle('show');});
    if(overlay)overlay.addEventListener('click',()=>{sidebar.classList.remove('open');overlay.classList.remove('show');});
  }
};

function getNavHTML(active) {
  const items=[
    {href:'index.html',icon:'🏠',label:'首页'},
    {href:'sourcing.html',icon:'🔍',label:'智能找货'},
    {href:'analysis.html',icon:'📈',label:'市场分析'},
    {href:'supplier.html',icon:'🏭',label:'供应商评估'},
    {href:'forecast.html',icon:'🔮',label:'销量预测'},
    {href:'user.html',icon:'👤',label:'工作台'}
  ];
  return items.map(i=>`<a href="${i.href}" class="nav-item ${i.href===active?'active':''}"><span class="nav-icon">${i.icon}</span><span>${i.label}</span></a>`).join('');
}

document.addEventListener('DOMContentLoaded',Utils.initSidebar);
