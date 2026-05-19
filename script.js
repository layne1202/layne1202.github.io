(function () {
  const translations = {
    en: {
      "nav.about": "About",
      "name.full": "Zhenguo <span>Wang</span>",
      "nav.education": "Education",
      "nav.research": "Research",
      "nav.news": "News",
      "nav.publications": "Publications",
      "nav.outputs": "Outputs",
      "nav.projects": "Projects",
      "nav.patents": "Patents",
      "nav.skills": "Skills",
      "nav.awards": "Awards",
      "nav.activities": "Activities",
      "nav.interests": "Interests",
      "nav.contact": "Contact",
      "about.eyebrow": "Doctor of Science",
      "about.affiliation": "Department of Atmospheric and Oceanic Sciences · Fudan University · <button class=\"text-copy-button\" type=\"button\" data-copy-email=\"zgwang24@m.fudan.edu.cn\">zgwang24@m.fudan.edu.cn</button>",
      "about.lead": "I develop physically interpretable machine-learning frameworks for reconstructing global ocean biogeochemical fields, with a focus on dissolved oxygen, surface-ocean pCO<sub>2</sub>, ocean deoxygenation, and carbon-oxygen coupling under climate change.",
      "about.bio": "I am a Ph.D. student in Atmospheric Sciences at Fudan University. My research interests include ocean spatiotemporal data modeling, marine biogeochemistry, dissolved oxygen and pCO<sub>2</sub> reconstruction, ocean deoxygenation, and machine learning.",
      "section.projects": "Research Projects",
      "experience.sdg.title": "Core Member, SDG Center Innovation Research Program",
      "experience.sdg.subtitle": "Global Ocean Dissolved Oxygen Product and Deoxygenation Mechanism Analysis",
      "experience.sdg.body": "Built Oracle-based ocean observation databases, developed machine-learning reconstruction models, produced a monthly global gridded dissolved oxygen dataset, and analyzed OMZ evolution and cross-variable relationships.",
      "experience.cas.title": "Member, CAS Strategic Priority Research Program",
      "experience.cas.subtitle": "Remote Sensing Monitoring System for Global Ocean Anomaly Processes",
      "experience.cas.body": "Contributed to marine multi-variable spatiotemporal datasets, dataset validation, batch processing workflows, method integration, and monitoring system development.",
      "section.education": "Education",
      "education.phd.school": "Department of Atmospheric and Oceanic Sciences, Fudan University",
      "education.phd.subtitle": "Ph.D. Student in Atmospheric Sciences",
      "education.phd.body": "GPA: 3.6/4<br>Research direction: AI-driven ocean biogeochemical modeling and applications",
      "education.ms.school": "Aerospace Information Research Institute, Chinese Academy of Sciences",
      "education.ms.subtitle": "M.S. in Resources and Environment",
      "education.ms.body": "GPA: 3.77/4<br>Research direction: ocean spatiotemporal data mining",
      "education.bs.school": "School of Oceanography and Space Informatics, China University of Petroleum (East China)",
      "education.bs.subtitle": "B.S. in Geographic Information Science",
      "education.bs.body": "GPA：3.57/4\nRanked 3/47 and recommended for graduate admission",
      "section.research": "Research Themes",
      "research.1": "AI-driven ocean biogeochemical modeling and applications",
      "research.2": "Ocean dissolved oxygen and pCO<sub>2</sub> reconstruction and change assessment",
      "research.3": "Ocean spatiotemporal data mining and gridded data product development",
      "research.4": "OMZ evolution and multi-variable coupling mechanisms, including carbon fluxes",
      "research.5": "Ocean remote sensing, GIS, and environmental monitoring system development",
      "research.theme1.title": "Ocean Oxygen Reconstruction",
      "research.theme1.body": "GEOXYGEN, Argo dissolved oxygen observations, and long-term reconstruction of global ocean oxygen change.",
      "research.theme2.title": "Surface-ocean pCO<sub>2</sub> and Carbon Sink",
      "research.theme2.body": "FDU-BTR / OceanBTR, surface-ocean pCO2 reconstruction, and air-sea CO2 flux assessment.",
      "research.theme3.title": "Interpretable AI for Ocean Biogeochemistry",
      "research.theme3.body": "BTR residual learning, region-aware modeling, uncertainty diagnosis, and physically meaningful machine learning.",
      "research.theme4.title": "Carbon-Oxygen Coupling",
      "research.theme4.body": "Oxygen minimum zones, ocean deoxygenation, carbon sinks, and thermal-carbon-oxygen coupling mechanisms.",
      "section.news": "News / Updates",
      "news.1.title": "GEOXYGEN dataset published in ESSD",
      "news.1.body": "The GEOXYGEN global long-term dissolved oxygen dataset paper was published in Earth System Science Data.",
      "news.2.title": "Global-scale sustainable development monitoring report 2025",
      "news.2.body": "Contributed to the dissolved oxygen analysis section of the Global-Scale Sustainable Development Monitoring Report 2025 (SDG 14.1).",
      "news.3.title": "Conference presentations and peer review",
      "news.3.body": "Presented at national conferences related to coastal remote sensing, geographic information science, and ocean data assimilation; served as a reviewer for Earth System Science Data.",
      "news.figure.caption": "Global average dissolved oxygen concentration in the ocean at depths of 0-800m (January 2020)",
      "section.publications": "Publications",
      "section.outputs": "Selected Outputs / Data Products",
      "projects.geoxygen.title": "GEOXYGEN Dissolved Oxygen Concentration Dataset",
      "projects.geoxygen.body": "Developed and released the GEOXYGEN global long-term dissolved oxygen dataset.",
      "projects.geoxygen.stack": "Topics: dissolved oxygen, gridded ocean data, biogeochemistry-aware machine learning",
      "projects.report.title": "Global-Scale Sustainable Development Monitoring Report 2025",
      "projects.report.body": "Contributed to the writing of the dissolved oxygen analysis section for the Global-Scale Sustainable Development Monitoring Report 2025.",
      "projects.report.stack": "Topics: sustainable development monitoring, dissolved oxygen analysis, ocean data products",
      "projects.monitor.title": "Global Ocean Anomaly Remote Sensing Monitoring System",
      "projects.monitor.body": "Updated and validated remote-sensing analysis datasets for global ocean surface environmental variables, supported batch processing, and integrated ocean spatiotemporal mining methods into a monitoring system.",
      "projects.monitor.stack": "Methods: remote sensing, dataset validation, batch processing, system integration",
      "link.reports": "Reports",
      "link.dataset": "Dataset",
      "link.doi": "DOI",
      "link.downloadReport": "Download report",
      "link.news": "Related post",
      "link.copy": "Copy",
      "lightbox.close": "Close",
      "lightbox.download": "Download",
      "section.patents": "Patents",
      "patents.1": "Xue, C., Wang, Z., and Yue, L. Method for constructing an ocean dissolved oxygen concentration reconstruction model based on Argo temperature and salinity profiles. CN: 202310062810.9.",
      "patents.2": "Xue, C., Yue, L., and Wang, Z. Method for constructing an Argo-based ocean dissolved oxygen spatial grid model. CN: 202211383915.6.",
      "section.skills": "Skills",
      "skill.proficient": "Proficient",
      "skill.basic": "Basic",
      "skills.programming.title": "Programming and Data",
      "skills.programming.body": "Python, MATLAB, SQL, Oracle, and spatial data processing.",
      "skills.ml.title": "Machine Learning",
      "skills.ml.body": "Machine learning and deep learning methods for ocean data reconstruction and analysis.",
      "skills.gis.title": "GIS and Remote Sensing",
      "skills.gis.body": "ArcGIS, QGIS, ENVI, GIS spatial analysis, and remote sensing image processing.",
      "skills.cert.title": "Certificates",
      "skills.cert.body": "CET-6; National Computer Rank Examination Level 2.",
      "section.awards": "Selected Honors",
      "awards.academic.title": "Academic and Research Honors",
      "awards.sports.title": "Sports and Arts",
      "awards.academic.1": "National Encouragement Scholarship",
      "awards.academic.2": "Surveying and Mapping Department Scholarship",
      "awards.academic.3": "Science and Technology Innovation Scholarship",
      "awards.academic.4": "Arts and Sports Scholarship",
      "awards.academic.5": "Outstanding Student and Outstanding Communist Youth League Member",
      "awards.academic.6": "Second Prize, Qingdao Innovation Surveying Skills Competition",
      "awards.academic.7": "Second Prize, University Surveying Skills Competition",
      "awards.academic.8": "Third Prize, University ACM Programming Contest",
      "awards.academic.9": "Third Prize, University Probability Theory Competition",
      "awards.academic.10": "Outstanding Undergraduate Thesis, university level",
      "awards.academic.11": "Outstanding Presentation, 1st National Coastal Zone Remote Sensing Conference, 2023",
      "awards.academic.12": "Excellent Doctoral Academic Scholarship, Fudan University, 2024-2025",
      "awards.sports.1": "Group First Prize, Campus Dance Competition, China University of Petroleum (East China), 2018",
      "awards.sports.2": "3rd place, 3000 m steeplechase, UPC Sports Meeting, 2019; 11'27''",
      "awards.sports.3": "5th place, 3000 m steeplechase, UPC Sports Meeting, 2020",
      "awards.sports.4": "8th place, 5000 m fitness run, AIRCAS Graduate Competition, 2023; 20'21''",
      "awards.sports.5": "Men's doubles and mixed doubles champion, AIRCAS Graduate Badminton Competition, 2023",
      "awards.sports.6": "Top 16, men's doubles, 7th Fudan Badminton Open, 2025",
      "awards.sports.7": "Men's doubles champion, Fudan Department of Atmospheric and Oceanic Sciences Teacher-Student Badminton Match, 2025",
      "section.activities": "Activities",
      "activities.talks.meta": "Academic Talks",
      "activities.talks.title": "Conference Presentations",
      "activities.talks.body": "The 1st National Coastal Zone Remote Sensing Conference;\nThe 18th China Geographic Information Science Theory and Method Academic Conference;\nThe 17th National Ocean Data Assimilation Conference.",      
      "activities.review.meta": "Peer Review",
      "activities.review.title": "Journal Review",
      "activities.review.body": "Served as a reviewer for one manuscript submitted to <em>Earth System Science Data</em>.",
      "activities.student.meta": "Student Work",
      "activities.student.title": "Student Leadership",
      "activities.student.body": "Deputy Minister of the Practice Department, Student Union of the College of Earth Science and Technology, 2018-2019;\nVice President of the 3S Association, University Science and Technology Innovation Union, 2018-2019;\nCaptain of the Ocean College Long-distance Running Team, 2019-2021.",
      "section.interests": "Beyond Research",
      "interests.body": "I enjoy badminton, running, hiking, and fitness training.",
      "interest.badminton": "Badminton",
      "interest.fitness": "Fitness",
      "interest.running": "Running",
      "interest.hiking": "Hiking",
      "section.contact": "Contact",
      "contact.email": "Email:",
      "contact.institution": "Institution:",
      "contact.institutionValue": "Department of Atmospheric and Oceanic Sciences, Fudan University",
      "contact.location": "Location:",
      "contact.locationValue": "Shanghai, China",
      "contact.motto": "Efficiency is doing things right; effectiveness is doing the right things. -Peter F. Drucker",
      "feedback.question": "Was this homepage useful?",
      "feedback.yes": "Yes",
      "feedback.thanks": "Thanks for the feedback."
    },
    zh: {
      "nav.about": "简介",
      "name.full": "王振国",
      "nav.education": "教育",
      "nav.research": "研究方向",
      "nav.news": "动态",
      "nav.publications": "论文",
      "nav.outputs": "成果产出",
      "nav.projects": "项目经历",
      "nav.patents": "专利",
      "nav.skills": "技能",
      "nav.awards": "荣誉",
      "nav.activities": "活动",
      "nav.interests": "兴趣",
      "nav.contact": "联系",
      "about.eyebrow": "理学博士",
      "about.affiliation": "复旦大学大气与海洋科学系 · <button class=\"text-copy-button\" type=\"button\" data-copy-email=\"zgwang24@m.fudan.edu.cn\">zgwang24@m.fudan.edu.cn</button>",
      "about.lead": "我的研究聚焦于面向海洋生物地球化学变量重构的物理可解释机器学习方法，重点关注全球海洋溶解氧、海表 pCO<sub>2</sub>、海洋脱氧及碳-氧耦合变化。",
      "about.bio": "我目前是复旦大学大气科学博士研究生，研究兴趣包括海洋时空数据建模、海洋生物地球化学、溶解氧与 pCO<sub>2</sub> 重建、海洋脱氧和机器学习。",
      "section.projects": "科研项目",
      "experience.sdg.title": "SDG 中心创新研究计划 --核心成员",
      "experience.sdg.subtitle": "全球海洋溶解氧产品与脱氧机制分析",
      "experience.sdg.body": "构建 Oracle 海洋观测数据库，发展机器学习重建模型，研制全球月尺度网格化溶解氧数据集，并分析氧最小带演变及跨变量关系。",
      "experience.cas.title": "中国科学院战略性先导科技专项 --成员",
      "experience.cas.subtitle": "全球海洋异常过程遥感监测系统",
      "experience.cas.body": "参与海洋多变量时空数据集建设、数据集验证、批处理流程、方法集成和监测系统开发。",
      "section.education": "教育背景",
      "education.phd.school": "复旦大学大气与海洋科学系",
      "education.phd.subtitle": "博士-大气科学",
      "education.phd.body": "GPA：3.6/4<br>研究方向：人工智能驱动的海洋生物地球化学建模与应用",
      "education.ms.school": "中国科学院空天信息创新研究院",
      "education.ms.subtitle": "硕士-资源与环境",
      "education.ms.body": "GPA：3.77/4<br>研究方向：海洋时空数据挖掘",
      "education.bs.school": "中国石油大学（华东）海洋与空间信息学院",
      "education.bs.subtitle": "本科-地理信息科学",
      "education.bs.body": "GPA：3.57/4\n专业排名 3/47，获得推荐免试研究生资格",
      "section.research": "研究主题",
      "research.1": "人工智能驱动的海洋生物地球化学建模与应用",
      "research.2": "海洋溶解氧与 pCO<sub>2</sub> 重建及变化评估",
      "research.3": "海洋时空数据挖掘与网格化数据产品研发",
      "research.4": "氧最小带演变及碳通量等多变量耦合机制分析",
      "research.5": "海洋遥感、GIS 与环境监测系统开发",
      "research.theme1.title": "海洋溶解氧重构",
      "research.theme1.body": "围绕 GEOXYGEN、Argo 溶解氧观测和全球海洋溶解氧长期变化开展数据重构与评估。",
      "research.theme2.title": "海表 pCO<sub>2</sub> 与海洋碳汇",
      "research.theme2.body": "关注 FDU-BTR / OceanBTR、海表 pCO2 重构及海-气 CO2 通量评估。",
      "research.theme3.title": "面向海洋生物地球化学的可解释 AI",
      "research.theme3.body": "发展 BTR 残差学习、区域感知建模、不确定性诊断和具有物理意义的机器学习方法。",
      "research.theme4.title": "碳-氧耦合变化",
      "research.theme4.body": "研究氧最小带、海洋脱氧、海洋碳汇以及热-碳-氧耦合机制。",
      "section.news": "最新动态",
      "news.1.title": "GEOXYGEN 论文发表于 ESSD",
      "news.1.body": "GEOXYGEN 全球长时间序列溶解氧数据集论文发表于 Earth System Science Data。",
      "news.2.title": "全球尺度可持续发展监测报告",
      "news.2.body": "参与《全球尺度可持续发展监测报告 2025》中溶解氧相关分析章节的撰写。",
      "news.3.title": "会议报告与同行评审",
      "news.3.body": "曾在海岸带遥感、地理信息科学和海洋资料同化相关全国会议作报告，并为 Earth System Science Data 审稿。",
      "news.figure.caption": "图：2020 年 1 月全球海洋 0-800 m 平均溶解氧浓度",
      "section.publications": "论文发表",
      "section.outputs": "代表性成果 / 数据产品",
      "projects.geoxygen.title": "GEOXYGEN 溶解氧浓度数据集",
      "projects.geoxygen.body": "研制并发布 GEOXYGEN 全球长时间序列溶解氧浓度数据集。",
      "projects.geoxygen.stack": "主题：溶解氧、海洋网格化数据、生物地球化学感知机器学习",
      "projects.report.title": "全球尺度可持续发展监测报告 2025",
      "projects.report.body": "参与《全球尺度可持续发展监测报告 2025》中溶解氧相关分析章节的撰写。",
      "projects.report.stack": "主题：可持续发展监测、溶解氧分析、海洋数据产品",
      "projects.monitor.title": "全球海洋异常过程遥感监测系统",
      "projects.monitor.body": "更新并验证全球海洋表层环境变量遥感分析数据集，支持批处理，并将海洋时空挖掘方法集成到监测系统中。",
      "projects.monitor.stack": "方法：遥感、数据集验证、批处理、系统集成",
      "link.reports": "报告列表",
      "link.doi": "查看论文",
      "link.dataset": "数据集",
      "link.downloadReport": "下载报告",
      "link.news": "公众号推送",
      "link.copy": "复制",
      "lightbox.close": "关闭",
      "lightbox.download": "下载",
      "section.patents": "专利",
      "patents.1": "薛存金、王振国、岳林峰：一种基于 Argo 温盐剖面的海洋溶解氧浓度重构模型构建方法。CN: 202310062810.9。",
      "patents.2": "薛存金、岳林峰、王振国：一种基于 Argo 的海洋溶解氧空间格模型构建方法。CN: 202211383915.6。",
      "section.skills": "技能",
      "skill.proficient": "熟悉",
      "skill.basic": "了解",
      "skills.programming.title": "编程与数据",
      "skills.programming.body": "Python、MATLAB、SQL、Oracle 与空间数据处理。",
      "skills.ml.title": "机器学习",
      "skills.ml.body": "熟悉sklearn和PyTorch框架。",
      "skills.gis.title": "GIS 与遥感",
      "skills.gis.body": "ArcGIS、QGIS、ENVI、GIS 空间分析与遥感影像处理。",
      "skills.cert.title": "证书",
      "skills.cert.body": "大学英语六级；全国计算机等级考试二级。",
      "section.awards": "代表性荣誉",
      "awards.academic.title": "学术与科研荣誉",
      "awards.sports.title": "文体比赛",
      "awards.academic.1": "国家励志奖学金",
      "awards.academic.2": "测绘系奖学金",
      "awards.academic.3": "科技创新奖学金",
      "awards.academic.4": "文体奖学金",
      "awards.academic.5": "校级优秀学生、优秀共青团员",
      "awards.academic.6": "青岛市创新测量技能大赛二等奖",
      "awards.academic.7": "校测绘技能大赛二等奖",
      "awards.academic.8": "校 ACM 程序设计大赛三等奖",
      "awards.academic.9": "校概率论竞赛三等奖",
      "awards.academic.10": "校级优秀本科毕业论文",
      "awards.academic.11": "2023 年第一届全国海岸带遥感大会优秀报告",
      "awards.academic.12": "复旦大学 2024 至 2025 学年博士生学业奖学金 优秀",
      "awards.sports.1": "2018 年中国石油大学（华东）校园舞蹈大赛团体一等奖（民族舞）",
      "awards.sports.2": "2019 年中国石油大学（华东）运动会 3000 米障碍赛第 3 名，成绩 11'27''",
      "awards.sports.3": "2020 年中国石油大学（华东）运动会 3000 米障碍赛第 5 名",
      "awards.sports.4": "2023 年中国科学院空天院研究生 5000 米健身跑第 8 名，成绩 20'21''",
      "awards.sports.5": "2023 年中国科学院空天院研究生羽毛球比赛男子双打、混合双打冠军",
      "awards.sports.6": "2025 年第七届复旦大学羽毛球公开赛男子双打 16 强",
      "awards.sports.7": "2025 年复旦大学大气与海洋科学系师生羽毛球赛男子双打冠军",
      "section.activities": "活动经历",
      "activities.talks.meta": "学术报告",
      "activities.talks.title": "会议报告",
      "activities.talks.body": "第一届全国海岸带遥感大会\n第十八届中国地理信息科学理论与方法学术年会\n第十七届全国海洋资料同化会议",
      "activities.review.meta": "同行评审",
      "activities.review.title": "期刊审稿",
      "activities.review.body": "为 <em>Earth System Science Data</em> 审稿 1 篇",
      "activities.student.meta": "学生工作",
      "activities.student.title": "学生干部经历",
      "activities.student.body": "2018-2019 年任校地学院学生会实践部副部长\n2018-2019 年任校科创联 3S 协会副会长\n2019-2021 年任海洋学院长跑队队长",
      "section.interests": "科研之外",
      "interests.body": "科研之外，我喜欢羽毛球、跑步、爬山和健身训练。",
      "interest.badminton": "羽毛球",
      "interest.fitness": "健身",
      "interest.running": "跑步",
      "interest.hiking": "爬山",
      "section.contact": "联系",
      "contact.email": "邮箱：",
      "contact.institution": "单位：",
      "contact.institutionValue": "复旦大学大气与海洋科学系",
      "contact.location": "地点：",
      "contact.locationValue": "中国上海",
      "contact.motto": "Efficiency is doing things right; effectiveness is doing the right things. -Peter F. Drucker",
      "feedback.question": "这个主页有帮助吗？",
      "feedback.yes": "有",
      "feedback.thanks": "感谢反馈。"
    }
  };

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const backToTop = document.querySelector(".back-to-top");
  const year = document.querySelector("#year");
  const sections = Array.from(document.querySelectorAll(".resume-section:not([hidden])"));
  const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  const skillbars = Array.from(document.querySelectorAll(".skillbar"));
  const langButtons = Array.from(document.querySelectorAll("[data-lang-switch]"));
  window.homepageTranslations = translations;

  function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const value = dictionary[node.dataset.i18n];
      if (typeof value === "string") node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
      const key = el.getAttribute("data-i18n-list");
      const value = translations[lang][key];
    
      if (!value) return;
    
      el.innerHTML = "";
    
      value
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
        .forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          el.appendChild(li);
        });
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      const value = dictionary[node.dataset.i18nHtml];
      if (typeof value === "string") node.innerHTML = value;
    });

    langButtons.forEach(function (button) {
      const active = button.dataset.langSwitch === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    try {
      localStorage.setItem("homepage-language", lang);
    } catch (error) {
      // Ignore storage failures; the page remains usable.
    }
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.dataset.langSwitch || "en");
    });
  });

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", link.getAttribute("href"));
    });
  });

  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 560);
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  skillbars.forEach(function (bar) {
    const percent = Number(bar.dataset.percent || 0);
    bar.style.setProperty("--target-width", Math.max(0, Math.min(100, percent)) + "%");
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.querySelectorAll(".skillbar").forEach(function (bar) {
              bar.classList.add("is-filled");
            });
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach(function (section) {
      revealObserver.observe(section);
    });

    const activeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach(function (section) {
      activeObserver.observe(section);
    });
  } else {
    sections.forEach(function (section) {
      section.classList.add("is-visible");
    });
    skillbars.forEach(function (bar) {
      bar.classList.add("is-filled");
    });
  }

  let storedLanguage = "en";
  applyLanguage(storedLanguage);
})();

(function () {
  const darkToggle = document.querySelector("[data-dark-toggle]");
  const usefulToggle = document.querySelector("[data-useful-toggle]");
  const usefulPanel = document.querySelector("#useful-panel");

  function currentLang() {
    return document.documentElement.lang === "zh-CN" ? "zh" : "en";
  }

  function showToast(message) {
    const toast = document.querySelector(".copy-toast");
    if (!toast) return;

    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("is-visible");

    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(function () {
      toast.classList.remove("is-visible");
      window.setTimeout(function () {
        toast.hidden = true;
      }, 180);
    }, 1000);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    document.body.removeChild(helper);
    return Promise.resolve();
  }

  function setDarkMode(enabled) {
    document.body.classList.toggle("dark-mode", enabled);
    if (darkToggle) {
      darkToggle.setAttribute("aria-pressed", String(enabled));
      darkToggle.textContent = enabled ? "Light" : "Dark";
    }
    try {
      localStorage.setItem("homepage-dark-mode", enabled ? "1" : "0");
    } catch (error) {
      // Ignore storage failures.
    }
  }

  try {
    setDarkMode(localStorage.getItem("homepage-dark-mode") === "1");
  } catch (error) {
    setDarkMode(false);
  }

  if (darkToggle) {
    darkToggle.addEventListener("click", function () {
      setDarkMode(!document.body.classList.contains("dark-mode"));
    });
  }

  if (usefulToggle && usefulPanel) {
    usefulToggle.addEventListener("click", function () {
      const isOpen = usefulPanel.hidden;
      usefulPanel.hidden = !isOpen;
      usefulToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (event) {
      if (usefulPanel.hidden) return;
      if (event.target.closest(".quick-actions")) return;
      usefulPanel.hidden = true;
      usefulToggle.setAttribute("aria-expanded", "false");
    });
  }

  document.addEventListener("click", async function (event) {
    const emailButton = event.target.closest("[data-copy-email]");
    if (!emailButton) return;

    const email = emailButton.getAttribute("data-copy-email") || "";
    try {
      await copyText(email);
      showToast(currentLang() === "zh" ? "邮箱已复制" : "Email copied");
    } catch (error) {
      showToast(currentLang() === "zh" ? "复制失败，请手动复制" : "Copy failed; please copy manually");
    }
  });

  document.querySelectorAll("[data-feedback-yes]").forEach(function (button) {
    button.addEventListener("click", function () {
      showToast(currentLang() === "zh" ? "感谢反馈" : "Thanks for the feedback.");
      try {
        localStorage.setItem("homepage-feedback", "yes");
      } catch (error) {
        // Ignore storage failures.
      }
    });
  });

  document.querySelectorAll("[data-copy-citation]").forEach(function (button) {
    button.addEventListener("click", async function () {
      const citation = button.getAttribute("data-copy-citation") || "";
      const originalText = currentLang() === "zh" ? "复制" : "Copy";
      button.textContent = currentLang() === "zh" ? "已复制" : "Copied";
      try {
        await copyText(citation);
      } catch (error) {
        button.textContent = originalText;
        showToast(currentLang() === "zh" ? "复制失败，请手动复制" : "Copy failed; please copy manually");
        return;
      }
      window.setTimeout(function () {
        button.textContent = originalText;
      }, 1000);
    });
  });
})();

(function () {
  const triggers = Array.from(document.querySelectorAll("[data-lightbox-item]"));
  const lightbox = document.querySelector(".lightbox");
  if (!triggers.length || !lightbox) return;

  const image = lightbox.querySelector("[data-lightbox-image]");
  const caption = lightbox.querySelector("[data-lightbox-caption]");
  const download = lightbox.querySelector("[data-lightbox-download]");
  const prev = lightbox.querySelector("[data-lightbox-prev]");
  const next = lightbox.querySelector("[data-lightbox-next]");
  let activeIndex = 0;

  function itemCaption(trigger) {
    const figureCaption = trigger.closest("figure")?.querySelector("figcaption");
    if (figureCaption) return figureCaption.textContent.trim();
    return trigger.getAttribute("data-caption") || "";
  }

  function render(index) {
    activeIndex = (index + triggers.length) % triggers.length;
    const trigger = triggers[activeIndex];
    const source = trigger.getAttribute("data-full-image") || trigger.querySelector("img")?.getAttribute("src") || "";
    const downloadSource = trigger.getAttribute("data-download") || source;
    const label = itemCaption(trigger);

    if (image) {
      image.src = source;
      image.alt = label || "Image preview";
    }
    if (caption) caption.textContent = trigger.classList.contains("figure-preview") ? "" : label;
    if (download) download.href = downloadSource;
  }

  function open(index) {
    render(index);
    lightbox.hidden = false;
    document.body.classList.add("is-lightbox-open");
    lightbox.querySelector("[data-lightbox-close]")?.focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.classList.remove("is-lightbox-open");
    triggers[activeIndex]?.focus?.();
  }

  document.addEventListener("click", function (event) {
    const trigger = event.target.closest("[data-lightbox-item]");
    if (!trigger) return;
    const index = triggers.indexOf(trigger);
    if (index < 0) return;
    event.preventDefault();
    open(index);
  });

  lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (button) {
    button.addEventListener("click", close);
  });

  prev?.addEventListener("click", function () {
    render(activeIndex - 1);
  });

  next?.addEventListener("click", function () {
    render(activeIndex + 1);
  });

  document.addEventListener("keydown", function (event) {
    if (lightbox.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") render(activeIndex - 1);
    if (event.key === "ArrowRight") render(activeIndex + 1);
  });
})();

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const hero = document.querySelector(".hero-section");

  if (!finePointer || reduceMotion || !hero) return;

  window.addEventListener("pointermove", function (event) {
    const offsetX = ((event.clientX / window.innerWidth) - 0.5) * 4;
    const offsetY = ((event.clientY / window.innerHeight) - 0.5) * 4;
    hero.style.setProperty("--hero-shift-x", offsetX.toFixed(2) + "px");
    hero.style.setProperty("--hero-shift-y", offsetY.toFixed(2) + "px");
  }, { passive: true });

  window.addEventListener("pointerleave", function () {
    hero.style.setProperty("--hero-shift-x", "0px");
    hero.style.setProperty("--hero-shift-y", "0px");
  });
})();

(function () {
  const progress = document.querySelector(".scroll-progress span");
  const canvas = document.querySelector(".ambient-particles");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateProgress() {
    if (!progress) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progress.style.width = Math.max(0, Math.min(100, percent)) + "%";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  if (canvas && !reduceMotion) {
    const context = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let particles = [];

    function resizeCanvas() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: Math.min(72, Math.max(36, Math.floor(width / 22))) }, function (_, index) {
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          speed: 0.08 + Math.random() * 0.14,
          phase: index * 0.43,
          radius: 0.8 + Math.random() * 1.1
        };
      });
    }

    function draw(time) {
      context.clearRect(0, 0, width, height);
      particles.forEach(function (particle, index) {
        particle.x += particle.speed;
        particle.y += Math.sin(time * 0.0008 + particle.phase) * 0.08;

        if (particle.x > width + 12) particle.x = -12;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(47, 111, 143, 0.34)";
        context.fill();

        if (index % 3 === 0) {
          context.beginPath();
          context.moveTo(particle.x - 18, particle.y);
          context.lineTo(particle.x + 18, particle.y + Math.sin(time * 0.001 + particle.phase) * 3);
          context.strokeStyle = "rgba(47, 111, 143, 0.13)";
          context.lineWidth = 1;
          context.stroke();
        }
      });
      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    requestAnimationFrame(draw);
  }
})();

(function () {
  const sections = Array.from(document.querySelectorAll(".resume-section[id]:not([hidden])"));

  if (!sections.length) return;

  let isScrolling = false;

  function getCurrentSectionIndex() {
    const scrollTop = window.scrollY;
    let currentIndex = 0;
    let minDistance = Infinity;

    sections.forEach(function (section, index) {
      const distance = Math.abs(section.offsetTop - scrollTop);
      if (distance < minDistance) {
        minDistance = distance;
        currentIndex = index;
      }
    });

    return currentIndex;
  }

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;

    isScrolling = true;

    sections[index].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    history.replaceState(null, "", "#" + sections[index].id);

    setTimeout(function () {
      isScrolling = false;
    }, 850);
  }

  window.addEventListener("keydown", function (event) {
    const target = event.target;
    const isEditable = target && (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.tagName === "SELECT" ||
      target.isContentEditable
    );

    if (isEditable || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;

    if (event.code === "Space") {
      event.preventDefault();
      scrollToSection(getCurrentSectionIndex() + (event.shiftKey ? -1 : 1));
    }
  });

  window.addEventListener(
    "wheel",
    function (event) {
      if (window.innerWidth <= 992) return;
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      const delta = event.deltaY;

      if (Math.abs(delta) < 20) return;

      event.preventDefault();

      const currentIndex = getCurrentSectionIndex();

      if (delta > 0) {
        scrollToSection(currentIndex + 1);
      } else {
        scrollToSection(currentIndex - 1);
      }
    },
    { passive: false }
  );
})();
