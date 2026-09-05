(function () {
  const companyName = '济南智链纵横人工智能有限公司';

  function updateCompanyName() {
    document.querySelectorAll('.header .logo img').forEach((logo) => {
      logo.src = '/assets/logo-KhLelugS.png?v=20260905-2';
      logo.alt = companyName;
    });
    document.querySelectorAll('.header .logo h1').forEach((title) => {
      if (title.textContent !== companyName) title.textContent = companyName;
    });
  }

  function replaceScrollingProjects() {
    const marquees = document.querySelectorAll('.customer .marquee');
    if (!marquees.length) return;

    const projects = [
      '闲鱼店铺智能管理系统',
      '校园智能服务系统',
      '跨境电商智能客服系统',
      '企业知识库智能问答系统',
      '智能合同审查管理系统',
      '制造业生产调度优化系统',
      '医疗健康智能随访系统',
      '政务服务智能导办系统',
      '人力资源智能招聘系统',
      '智慧园区运营管理系统',
      '金融风控智能分析系统',
      '连锁门店智能运营系统',
      '内容创作智能审核系统',
      '客户关系智能增长系统',
      '供应链智能预测系统',
      'AI营销内容生成系统',
      '智能会议纪要分析系统',
      '物流配送路径优化系统',
      '农业生产智能决策系统',
      '能源管理智能监测系统',
    ];

    marquees.forEach((marquee, rowIndex) => {
      if (marquee.dataset.textProjectsReady) return;
      const rowProjects = rowIndex === 0 ? projects.slice(0, 10) : projects.slice(10, 20);
      const group = rowProjects
        .map((project) => `<div class="item"><div class="label">${project}</div></div>`)
        .join('');
      marquee.innerHTML = `<div class="marquee__group">${group}</div><div class="marquee__group">${group}</div>`;
      marquee.dataset.textProjectsReady = 'true';
    });
  }

  function replaceCompanyIntro() {
    const intro = document.querySelector('.introduction_item[data-v-ef74de1e]');
    if (!intro || intro.dataset.companyIntroReady) return;

    const paragraphs = [
      '济南智链纵横人工智能有限公司，专注研发企业及个人智能化应用、形象网站和小程序，聚焦“低成本 + 高体验”双核心，推动 AI 技术在真实业务场景中高效落地。',
      '公司依托多年技术沉淀，提供从方案设计、系统开发到源码交付、私有化部署和按需定制的全流程服务，帮助客户构建安全、稳定、易用的智能化系统。',
      '未来，公司将持续深耕 AI 技术与行业场景融合，以场景落地检验技术价值，助力企业数字化转型升级，成为值得信赖的 AI 解决方案服务商。',
    ];

    intro.querySelectorAll(':scope > p').forEach((paragraph, index) => {
      if (paragraphs[index]) paragraph.textContent = paragraphs[index];
    });
    intro.dataset.companyIntroReady = 'true';
  }

  function replaceIntroVideo() {
    const wrapper = document.querySelector('.introduction_item.video_wrapper');
    if (!wrapper || wrapper.dataset.imageReady) return;

    wrapper.innerHTML = '<img src="/assets/company-building.png" alt="济南智链纵横办公楼" />';
    wrapper.dataset.imageReady = 'true';
  }

  function replaceIntroStats() {
    const intro = document.querySelector('.introduction_item[data-v-ef74de1e]');
    if (!intro || intro.dataset.statsReady) return;

    const stats = [
      ['系统搭建', '200+'],
      ['网站设计', '5000+'],
      ['营收价值', '400w'],
    ];
    const cards = intro.querySelectorAll(':scope > .card_list > .col-lg-4');
    if (cards.length < stats.length) return;

    cards.forEach((card, index) => {
      const values = stats[index];
      const label = card.querySelector('.label');
      const number = card.querySelector('.item_number');
      if (label) label.textContent = values[0];
      if (number) number.textContent = values[1];
    });
    intro.dataset.statsReady = 'true';
  }

  function replaceBusinessDirection() {
    const heading = Array.from(document.querySelectorAll('.module_container h1')).find(
      (item) => item.textContent.trim() === '业务方向',
    );
    const section = heading && heading.closest('.module_container');
    if (!heading || !section || section.dataset.businessReady) return;

    const cards = section.querySelectorAll(':scope > .container > .card_list > .col-lg-4');
    if (cards.length < 3) return;

    heading.textContent = '目前主营业务';
    const services = [
      [
        '小程序设计服务',
        '围绕企业经营与用户服务场景，提供小程序策划、界面设计、功能开发与上线支持，打造便捷易用、转化高效的移动端应用。',
      ],
      [
        '网站开发服务',
        '提供企业官网、品牌展示站和业务门户等网站建设服务，从视觉设计到前端开发一体化交付，兼顾品牌形象、访问体验与后续运营。',
      ],
      [
        '企业智能化服务',
        '结合企业实际业务导入 AI 能力，提供智能问答、知识库、流程自动化与数据分析等解决方案，帮助企业提升效率、降低成本。',
      ],
    ];

    cards.forEach((card, index) => {
      const service = services[index];
      const title = card.querySelector('h2');
      const description = card.querySelector('p');
      const icon = card.querySelector('.item_icon');
      if (title) title.textContent = service[0];
      if (description) description.textContent = service[1];
      if (icon && index === 2) icon.src = '/assets/icon_11-CnHplktc.png?v=20260904-2';
    });
    section.dataset.businessReady = 'true';
  }

  function addBusinessProspectLabel() {
    const heading = Array.from(document.querySelectorAll('.module_container h1')).find(
      (item) => item.textContent.trim() === '构建丰富场景矩阵，助力大模型扎根千行百业',
    );
    if (!heading || heading.dataset.prospectLabelReady) return;

    const label = document.createElement('div');
    label.className = 'business-prospect-label';
    label.textContent = '公司前景业务';
    heading.parentElement.insertBefore(label, heading);
    heading.dataset.prospectLabelReady = 'true';
  }

  function replaceCoreAdvantages() {
    const heading = Array.from(document.querySelectorAll('.module_container h1')).find(
      (item) => item.textContent.trim() === '核心优势',
    );
    const section = heading && heading.closest('.module_container');
    if (!heading || !section || section.dataset.advantagesReady) return;

    const cardList = section.querySelector(':scope > .container > .card_list');
    const cards = cardList && cardList.querySelectorAll(':scope > [class*="col-lg-3"]');
    if (!cardList || !cards || cards.length < 4) return;

    const advantages = [
      ['专业技术能力', ['融合成熟技术与行业经验，快速理解业务需求，提供稳定可靠的智能化解决方案。']],
      ['全流程交付', ['覆盖方案设计、产品开发、测试上线与运维支持，专人协同推进，保障项目高效落地。']],
      ['灵活定制服务', ['根据企业规模、业务流程和使用场景灵活配置，支持功能定制与持续迭代升级。']],
      ['安全稳定保障', ['重视数据安全与系统稳定性，完善权限、备份和运行保障机制，让业务使用更安心。']],
      ['持续服务支持', ['提供长期技术支持与运营优化建议，及时响应使用需求，陪伴企业持续提升数字化能力。']],
    ];

    const fifthCard = cards[3].cloneNode(true);
    cardList.appendChild(fifthCard);
    const updatedCards = cardList.querySelectorAll(':scope > [class*="col-lg-3"]');
    updatedCards.forEach((card, index) => {
      const title = card.querySelector('h2');
      const content = card.querySelector('.content');
      const advantage = advantages[index];
      if (title) title.textContent = advantage[0];
      if (content) content.innerHTML = `<p>${advantage[1][0]}</p>`;
    });

    section.classList.add('core-advantages-section');
    section.dataset.advantagesReady = 'true';
  }

  function replaceCases() {
    const heading = Array.from(document.querySelectorAll('.module_container h1')).find(
      (item) => item.textContent.trim() === '案例',
    );
    const section = heading && heading.closest('.module_container');
    const content = section && section.querySelector(':scope > .container-fluid > .content, :scope > .container > .content');
    if (!heading || !section || !content || section.dataset.casesReady) return;

    const cases = [
      {
        title: '校园跑腿智能服务平台',
        image: '/assets/case-campus.png',
        description: '面向高校校园场景，提供代取快递、物品配送、跑腿代办等便捷服务，通过任务发布、智能派单和订单追踪，打造高效的校园生活服务平台。',
      },
      {
        title: '企业智能运营管理系统',
        image: '/assets/case-enterprise.png',
        description: '围绕企业项目、客户、任务和团队协作等核心业务，构建统一的智能运营管理平台，帮助企业实现业务过程数字化与经营管理可视化。',
      },
      {
        title: '闲鱼店铺智能管理系统',
        image: '/assets/case-xianyu.png',
        description: '面向闲鱼店铺经营场景，提供商品管理、订单处理、客户沟通、数据分析和自动化运营等功能，提升商家日常管理效率。',
      },
      {
        title: '跨境电商智能客服系统',
        image: '/assets/case-cross-border.png',
        description: '面向跨境电商企业提供多语言智能客服、订单查询、客户沟通和售后支持，通过实时翻译与 AI 回复建议，降低人工沟通成本。',
      },
      {
        title: '智慧园区运营管理系统',
        image: '/assets/case-park.png',
        description: '整合园区设施、访客、工单、能源和安全等管理场景，通过可视化地图、设备监测和能耗分析，推动园区精细化智能运营。',
      },
    ];

    const group = cases.map((item) => `
      <article class="case-card">
        <img src="${item.image}" alt="${item.title}" />
        <div class="case-card__body">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
        </div>
      </article>`).join('');
    content.innerHTML = `<div class="case-marquee"><div class="case-marquee__group">${group}</div><div class="case-marquee__group" aria-hidden="true">${group}</div></div>`;
    section.dataset.casesReady = 'true';
  }

  function hideComputeServices() {
    const heading = Array.from(document.querySelectorAll('.module_container h1')).find(
      (item) => item.textContent.trim() === '稳定、安全、高性价比的算力服务',
    );
    const section = heading && heading.closest('.module_container');
    if (!section || section.dataset.computeHidden) return;
    section.style.display = 'none';
    section.dataset.computeHidden = 'true';
  }

  function replaceFooterInfo() {
    const footer = document.querySelector('.footer_container');
    if (!footer || footer.dataset.footerReady) return;

    const logo = footer.querySelector('.info_item .logo');
    const qrCode = footer.querySelector('.wx img');
    const filing = footer.querySelector('.filing');
    const info = footer.querySelectorAll('.info_item p');
    if (logo) logo.src = '/assets/logo-KhLelugS.png?v=20260905-2';
    if (qrCode) {
      qrCode.src = '/assets/contact-qr.jpg?v=20260905-1';
      qrCode.alt = '联系二维码';
    }
    if (filing) filing.remove();
    if (info[0]) info[0].textContent = '地址：济南市市中区中博领创时代中心500米路南';
    if (info[1]) {
      const phoneRow = info[1].closest('.col-12');
      if (phoneRow) phoneRow.style.display = 'none';
    }
    if (info[2]) info[2].textContent = '邮箱：JNZLZHAI@163.com';
    footer.dataset.footerReady = 'true';
  }

  function replaceIndustryNews() {
    const heading = Array.from(document.querySelectorAll('.module_container h1')).find(
      (item) => ['重大事件', '行业新闻'].includes(item.textContent.trim()),
    );
    const section = heading && heading.closest('.module_container');
    if (!heading || !section || section.dataset.newsReady) return;

    heading.textContent = '行业新闻';
    const cover = section.querySelector('.first_new img');
    if (cover) {
      cover.src = '/assets/ai-industry-news.png?v=20260905-1';
      cover.alt = 'AI行业发展与产业创新';
    }

    const news = [
      {
        title: '从信息社会迈向智能社会',
        date: '2020-02-18',
        url: 'http://it.people.com.cn/GB/n1/2020/0218/c1009-31591745.html',
      },
      {
        title: '中外嘉宾热议：人工智能如何成为亚太发展新引擎',
        date: '2026-09-04',
        url: 'http://m.chinanews.com/wap/detail/zw/ydyl/2026/09-04/10690050.shtml',
      },
      {
        title: '从“会说”到“可信”，AI产业化正在跨越什么？',
        date: '2026-08-29',
        url: 'http://fj.people.com.cn/n2/2026/0829/c181466-41681037.html',
      },
      {
        title: '北京亦庄发布“AI人才八条” 为原生创业者打开新通道',
        date: '2026-08-18',
        url: 'https://baijiahao.baidu.com/s?id=1873869261200715449&wfr=baike',
      },
      {
        title: '北京经开区：支持人工智能原生人才发展',
        date: '2026-09-01',
        url: 'http://district.ce.cn/newarea/roll/202609/t20260901_3185512.shtml',
      },
      {
        title: '冠军背后的“圈”力量',
        date: '2026-09-04',
        url: 'https://xh.xhby.net/pc/con/202609/04/content_1586943.html',
      },
    ];

    const setDate = (item, value) => {
      const [year, month, day] = value.split('-');
      const dayNode = item.querySelector('.date .day');
      const monthNode = item.querySelector('.date .year_month');
      if (dayNode) dayNode.textContent = day;
      if (monthNode) monthNode.textContent = `${year}-${month}`;
    };
    const makeClickable = (item, article) => {
      if (!item) return;
      setDate(item, article.date);
      const title = item.querySelector('.new_content h2, .content h2');
      const summary = item.querySelector('.new_content p, .content p');
      if (title) title.textContent = article.title;
      if (summary) summary.textContent = '';
      item.style.cursor = 'pointer';
      item.setAttribute('role', 'link');
      item.setAttribute('tabindex', '0');
      item.onclick = () => window.open(article.url, '_blank', 'noopener');
      item.onkeydown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          item.click();
        }
      };
    };

    const featured = section.querySelector('.first_new');
    makeClickable(featured, news[0]);
    const listItems = Array.from(section.querySelectorAll('.col-lg-6 .list_item'))
      .filter((item) => !item.classList.contains('first_new'));
    listItems.slice(0, news.length - 1).forEach((item, index) => makeClickable(item, news[index + 1]));

    section.dataset.newsReady = 'true';
  }

  updateCompanyName();
  replaceScrollingProjects();
  replaceCompanyIntro();
  replaceIntroVideo();
  replaceIntroStats();
  replaceBusinessDirection();
  addBusinessProspectLabel();
  replaceCoreAdvantages();
  replaceCases();
  hideComputeServices();
  replaceFooterInfo();
  replaceIndustryNews();
  new MutationObserver(updateCompanyName).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceScrollingProjects).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceCompanyIntro).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceIntroVideo).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceIntroStats).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceBusinessDirection).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(addBusinessProspectLabel).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceCoreAdvantages).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceCases).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(hideComputeServices).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceFooterInfo).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  new MutationObserver(replaceIndustryNews).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
