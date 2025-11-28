// 简单的JavaScript功能，用于响应式设计和交互效果

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 可以在这里添加更多交互功能
    console.log('雄安新兴戎利运营管理部网站加载完成');
});

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // 这里可以添加表单提交逻辑
        alert('感谢您的留言，我们将尽快与您联系！');
        this.reset();
    });
}

// 添加页面加载动画
window.addEventListener('load', function() {
    const body = document.body;
    body.classList.add('loaded');
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = '#002244';
        header.style.padding = '0.8rem 0';
    } else {
        header.style.background = '#003366';
        header.style.padding = '1rem 0';
    }
});

// 为卡片添加悬停效果
const cards = document.querySelectorAll('.feature, .business-item, .news-item');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    });
});