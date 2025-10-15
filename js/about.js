document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("aboutMain");

    const content = `
        <h2>About MindBloom & Wellness Haven</h2>
        <p>Welcome to MindBloom & Wellness Haven! Our mission is to provide accessible mental health and wellness resources to everyone. We believe in nurturing the mind, body, and spirit to help individuals lead happier, healthier lives.</p>

        <section class="founder">
            <h3>Meet the Founder</h3>
            <img src="/public/images/founder.jpg" alt="Founder Image" width="250" height="250">
            <p>Johnson Nsisong Gabriel founded MindBloom & Wellness Haven with the goal of creating a safe space for mental wellness education and support. His vision is to empower people through knowledge, connection, and self-care practices.</p>
        </section>

        <section class="history">
            <h3>Our Story</h3>
            <p>MindBloom & Wellness Haven started as a small community initiative and has grown into a trusted online platform providing resources, tips, and guidance for mental wellness. We collaborate with experts and organizations to ensure our users get accurate and helpful information.</p>
        </section>

        <section class="values">
            <h3>Our Values</h3>
            <ul>
                <li>Compassion & Empathy</li>
                <li>Accessibility & Inclusivity</li>
                <li>Integrity & Reliability</li>
                <li>Continuous Learning & Growth</li>
            </ul>
        </section>
    `;

    main.innerHTML = content;
});
