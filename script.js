document.addEventListener('DOMContentLoaded', () => {
    const bubbles = document.querySelectorAll('.bubble');
    
    bubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            // 移除其他气泡的选中状态
            bubbles.forEach(b => b.classList.remove('selected'));
            // 添加当前气泡的选中状态
            bubble.classList.add('selected');
            
            // 获取用户选择
            const userChoice = bubble.querySelector('h2').textContent;
            
            // 存储用户选择
            localStorage.setItem('userChoice', userChoice);
            
            // 添加过渡动画
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.8s ease';
            
            // 延迟后跳转到下一页
            setTimeout(() => {
                window.location.href = 'education.html';
            }, 800);
        });
    });
}); 