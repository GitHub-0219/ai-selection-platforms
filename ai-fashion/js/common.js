/* ============================================
   AI Fashion Selection Platform - Mock Data & Utilities
   ============================================ */

// Mock Data
const MOCK_DATA = {
  // Trend data
  trends: {
    hotSelling: [
      { name: '新中式改良旗袍', score: 96, change: '+12%', trend: 'up' },
      { name: '极简风针织套装', score: 92, change: '+8%', trend: 'up' },
      { name: 'Y2K千禧辣妹风', score: 88, change: '+15%', trend: 'up' },
      { name: '法式复古碎花裙', score: 85, change: '+5%', trend: 'up' },
      { name: '机能风工装裤', score: 82, change: '+10%', trend: 'up' },
      { name: '美拉德色系大衣', score: 78, change: '-3%', trend: 'down' },
      { name: 'Clean Fit极简', score: 75, change: '+7%', trend: 'up' },
      { name: '多巴胺穿搭', score: 72, change: '-5%', trend: 'down' }
    ],
    colors: [
      { name: '薄荷绿', hex: '#98D8C8', pantone: '13-5911', hot: 95 },
      { name: '雾霾蓝', hex: '#7EB8D8', pantone: '15-4312', hot: 88 },
      { name: '燕麦色', hex: '#D4C5A9', pantone: '13-0908', hot: 85 },
      { name: '玫瑰粉', hex: '#E8B4B8', pantone: '14-1511', hot: 82 },
      { name: '牛油果绿', hex: '#87A96B', pantone: '16-0430', hot: 78 },
      { name: '香芋紫', hex: '#C3AED6', pantone: '16-3931', hot: 75 },
      { name: '落日橘', hex: '#E8915A', pantone: '16-1448', hot: 72 },
      { name: '燕尾黑', hex: '#2C2C2C', pantone: '19-0303', hot: 90 }
    ],
    fabrics: [
      { name: '醋酸面料', heat: 95, change: '+20%' },
      { name: '真丝缎面', heat: 90, change: '+12%' },
      { name: '环保再生面料', heat: 88, change: '+25%' },
      { name: '天丝', heat: 85, change: '+8%' },
      { name: '精纺羊毛', heat: 82, change: '+5%' },
      { name: '科技防水面料', heat: 78, change: '+15%' },
      { name: '亚麻混纺', heat: 75, change: '+3%' },
      { name: '有机棉', heat: 72, change: '+10%' }
    ],
    styles: [
      { name: '极简主义', size: 1.8, color: '#6C5CE7' },
      { name: '新中式', size: 1.6, color: '#00D2D3' },
      { name: 'Y2K千禧', size: 1.5, color: '#a29bfe' },
      { name: '复古法式', size: 1.4, color: '#7efff5' },
      { name: '机能风', size: 1.3, color: '#6C5CE7' },
      { name: '美拉德', size: 1.2, color: '#00D2D3' },
      { name: 'Clean Fit', size: 1.1, color: '#a29bfe' },
      { name: '多巴胺', size: 1.0, color: '#7efff5' },
      { name: '老钱风', size: 0.95, color: '#6C5CE7' },
      { name: '废土风', size: 0.9, color: '#00D2D3' },
      { name: '学院风', size: 0.85, color: '#a29bfe' },
      { name: '街头潮牌', size: 0.8, color: '#7efff5' }
    ]
  },

  // Products
  products: [
    { id: 1, name: '新中式盘扣缎面连衣裙', category: '连衣裙', price: 389, cost: 120, style: '新中式', scene: '约会', season: '春夏', emoji: '👗', match: 96, sales: 12580, stock: 500 },
    { id: 2, name: '极简风廓形西装外套', category: '外套', price: 599, cost: 180, style: '极简', scene: '职场', season: '四季', emoji: '🧥', match: 92, sales: 9870, stock: 300 },
    { id: 3, name: 'Y2K亮片吊带背心', category: '上衣', price: 169, cost: 45, style: 'Y2K', scene: '派对', season: '春夏', emoji: '✨', match: 88, sales: 15600, stock: 800 },
    { id: 4, name: '法式碎花茶歇裙', category: '连衣裙', price: 459, cost: 135, style: '法式', scene: '度假', season: '春夏', emoji: '🌸', match: 85, sales: 8920, stock: 200 },
    { id: 5, name: '机能风多口袋工装裤', category: '裤装', price: 329, cost: 95, style: '机能', scene: '休闲', season: '四季', emoji: '👖', match: 82, sales: 11200, stock: 450 },
    { id: 6, name: '美拉德色系羊毛大衣', category: '外套', price: 899, cost: 280, style: '美拉德', scene: '通勤', season: '秋冬', emoji: '🧣', match: 78, sales: 6500, stock: 150 },
    { id: 7, name: 'Clean Fit纯棉圆领T恤', category: '上衣', price: 129, cost: 35, style: 'Clean Fit', scene: '日常', season: '春夏', emoji: '👕', match: 75, sales: 25800, stock: 1000 },
    { id: 8, name: '多巴胺撞色针织开衫', category: '针织', price: 299, cost: 88, style: '多巴胺', scene: '休闲', season: '春秋', emoji: '🧶', match: 72, sales: 7800, stock: 350 }
  ],

  // Rankings
  rankings: {
    hot: [
      { rank: 1, name: '新中式盘扣缎面连衣裙', sales: '12,580', change: '+32%' },
      { rank: 2, name: 'Clean Fit纯棉圆领T恤', sales: '25,800', change: '+18%' },
      { rank: 3, name: 'Y2K亮片吊带背心', sales: '15,600', change: '+45%' },
      { rank: 4, name: '机能风多口袋工装裤', sales: '11,200', change: '+22%' },
      { rank: 5, name: '极简风廓形西装外套', sales: '9,870', change: '+15%' }
    ],
    rising: [
      { rank: 1, name: '废土风做旧牛仔外套', sales: '3,200', change: '+156%' },
      { rank: 2, name: '老钱风绞花毛衣', sales: '2,800', change: '+120%' },
      { rank: 3, name: '新中式马面裙', sales: '5,100', change: '+98%' },
      { rank: 4, name: 'Y2K低腰牛仔裤', sales: '4,500', change: '+85%' },
      { rank: 5, name: '解构主义衬衫', sales: '2,100', change: '+72%' }
    ],
    newArrival: [
      { rank: 1, name: '2025早秋薄款风衣', price: 699, days: 2 },
      { rank: 2, name: '新中式改良汉元素套装', price: 529, days: 3 },
      { rank: 3, name: 'AI联名限定印花T恤', price: 199, days: 1 },
      { rank: 4, name: '机能风反光条运动外套', price: 459, days: 4 },
      { rank: 5, name: '极简风高腰阔腿裤', price: 339, days: 2 }
    ]
  },

  // AI Recommendations
  recommendations: [
    {
      season: '2025春夏',
      scene: '职场通勤',
      items: [
        { name: '极简风廓形西装外套', match: 95, reason: '2025春夏极简风持续走高，西装外套搜索量+40%' },
        { name: '高腰九分烟管裤', match: 91, reason: '职场穿搭需求增长，烟管裤适配率高' },
        { name: '真丝缎面衬衫', match: 88, reason: '面料热度TOP3，质感通勤风正当时' }
      ]
    },
    {
      season: '2025春夏',
      scene: '度假出游',
      items: [
        { name: '法式碎花茶歇裙', match: 93, reason: '度假场景搜索量+60%，碎花元素必备' },
        { name: '草编手提包', match: 89, reason: '度假搭配必备单品，社交平台热度高' },
        { name: '薄荷绿针织开衫', match: 85, reason: '流行色TOP1，防晒+搭配两不误' }
      ]
    }
  ],

  // Sales Data
  salesData: {
    monthly: [
      { month: '1月', value: 1280 },
      { month: '2月', value: 980 },
      { month: '3月', value: 1560 },
      { month: '4月', value: 1890 },
      { month: '5月', value: 2100 },
      { month: '6月', value: 2450 },
      { month: '7月', value: 2280 },
      { month: '8月', value: 2150 },
      { month: '9月', value: 1980 },
      { month: '10月', value: 2350 },
      { month: '11月', value: 2890 },
      { month: '12月', value: 3200 }
    ],
    categories: [
      { name: '连衣裙', value: 35 },
      { name: '外套', value: 22 },
      { name: '上衣', value: 18 },
      { name: '裤装', value: 15 },
      { name: '针织', value: 10 }
    ],
    userProfiles: [
      { label: '18-24岁', value: 30 },
      { label: '25-34岁', value: 42 },
      { label: '35-44岁', value: 18 },
      { label: '45+', value: 10 }
    ]
  },

  // Timeline
  timeline: [
    { season: '2024春夏', styles: ['极简主义', 'Clean Fit', '老钱风'], colors: ['燕麦色', '雾霾蓝', '薄荷绿'] },
    { season: '2024秋冬', styles: ['美拉德', '废土风', '机能风'], colors: ['燕尾黑', '美拉德棕', '军绿'] },
    { season: '2025春夏', styles: ['新中式', 'Y2K千禧', '多巴胺'], colors: ['薄荷绿', '玫瑰粉', '香芋紫'] },
    { season: '2025秋冬', styles: ['解构主义', '复古未来', '极简奢'], colors: ['深空灰', '暗夜蓝', '金属银'] },
    { season: '2026春夏', styles: ['生态美学', '数字游牧', '极简科技'], colors: ['生态绿', '数字紫', '晨曦白'] }
  ],

  // Design Inspiration
  designs: [
    { id: 1, title: '2025新中式图鉴', desc: '盘扣×现代剪裁的完美融合', tags: ['新中式', '改良', '国潮'], emoji: '🏮' },
    { id: 2, title: 'Y2K辣妹穿搭指南', desc: '千禧风回潮，亮片+低腰+厚底', tags: ['Y2K', '辣妹', '千禧'], emoji: '💫' },
    { id: 3, title: '极简通勤美学', desc: 'Less is More的高级感', tags: ['极简', '通勤', '高级'], emoji: '🤍' },
    { id: 4, title: '法式度假风合集', desc: '碎花、蕾丝、草编的浪漫', tags: ['法式', '度假', '浪漫'], emoji: '🌺' },
    { id: 5, title: '机能风都市探索', desc: '功能美学与城市机能', tags: ['机能', '都市', '功能'], emoji: '⚡' },
    { id: 6, title: '美拉德秋冬色谱', desc: '大地色系的温暖质感', tags: ['美拉德', '秋冬', '质感'], emoji: '🍂' }
  ],

  // Color Palettes
  palettes: [
    { name: '薄荷花园', colors: ['#98D8C8', '#7EC8B8', '#B8E8D8', '#5DA898', '#D0F0E8'] },
    { name: '落日余晖', colors: ['#E8915A', '#D47840', '#F0A870', '#C06030', '#F8C098'] },
    { name: '紫罗兰梦', colors: ['#C3AED6', '#A888C8', '#D8C0E8', '#8860B0', '#E8D8F0'] },
    { name: '海洋之心', colors: ['#7EB8D8', '#60A0C8', '#98D0E8', '#4888B0', '#B0E0F0'] },
    { name: '大地之歌', colors: ['#D4C5A9', '#B8A888', '#E0D8C0', '#988060', '#EDE5D0'] }
  ]
};

// Utility Functions
const Utils = {
  // Format number
  formatNum(n) {
    if (n >= 10000) return (n/10000).toFixed(1) + '万';
    if (n >= 1000) return (n/1000).toFixed(1) + 'k';
    return n.toString();
  },

  // Random between
  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Create element
  el(tag, attrs = {}, children = []) {
    const elem = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'className') elem.className = v;
      else if (k === 'innerHTML') elem.innerHTML = v;
      else if (k === 'textContent') elem.textContent = v;
      else if (k.startsWith('on')) elem.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'style' && typeof v === 'object') Object.assign(elem.style, v);
      else elem.setAttribute(k, v);
    });
    children.forEach(c => {
      if (typeof c === 'string') elem.appendChild(document.createTextNode(c));
      else if (c) elem.appendChild(c);
    });
    return elem;
  },

  // Animate number
  animateNum(el, target, duration = 1000) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(start).toLocaleString();
    }, 16);
  },

  // Debounce
  debounce(fn, ms = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  },

  // Generate sparkline bars
  sparkline(container, data, maxVal) {
    container.innerHTML = '';
    data.forEach(v => {
      const bar = document.createElement('div');
      bar.className = 'sparkline-bar';
      bar.style.height = (v / maxVal * 100) + '%';
      container.appendChild(bar);
    });
  },

  // Mobile sidebar toggle
  initSidebar() {
    const toggle = document.querySelector('.mobile-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('show');
    });
    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
      });
    }
  },

  // Tab switching
  initTabs(container) {
    const tabs = container.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        container.querySelectorAll('.tab-panel').forEach(p => {
          p.style.display = p.dataset.panel === target ? 'block' : 'none';
        });
      });
    });
  }
};

// Navigation template
function getNavHTML(activePage) {
  const items = [
    { href: 'index.html', icon: '🏠', label: '首页' },
    { href: 'trend.html', icon: '📈', label: '趋势分析' },
    { href: 'selection.html', icon: '🎯', label: 'AI选品' },
    { href: 'design.html', icon: '🎨', label: 'AI设计灵感' },
    { href: 'data.html', icon: '📊', label: '数据中心' },
    { href: 'user.html', icon: '👤', label: '工作台' }
  ];
  return items.map(i =>
    `<a href="${i.href}" class="nav-item ${i.href === activePage ? 'active' : ''}">
      <span class="nav-icon">${i.icon}</span>
      <span>${i.label}</span>
    </a>`
  ).join('');
}

function getPageShell(activePage, title, subtitle) {
  return `
    <button class="mobile-toggle">☰</button>
    <div class="overlay"></div>
    <div class="app-layout">
      <aside class="sidebar">
        <div class="sidebar-logo">
          <h1>AI Fashion</h1>
          <p>智能时尚选品平台</p>
        </div>
        <nav class="sidebar-nav">${getNavHTML(activePage)}</nav>
        <div class="sidebar-footer">
          <div class="avatar">AI</div>
          <div class="user-info">
            <div class="name">选品专家</div>
            <div class="role">高级分析师</div>
          </div>
        </div>
      </aside>
      <main class="main-content">
        <div class="page-header">
          <div>
            <div class="page-title">${title}</div>
            <div class="page-subtitle">${subtitle}</div>
          </div>
          <div class="header-actions">
            <div class="search-box">
              <input class="input" placeholder="搜索商品/趋势/供应商..." style="width:260px">
            </div>
            <button class="btn btn-primary">🔍 AI分析</button>
          </div>
        </div`;
}

function closePageShell() {
  return `
      </main>
    </div>`;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  Utils.initSidebar();
});
