const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    const project = setInterval(updateCount, 1);
    let count = 0;

    function updateCount()
    {
        const target = counter.getAttribute('data-target');
        increment = target / 1000; // COUNTER SPEED LOWER NUMBER = HIGH SPEED
        count = count +  increment;
        counter.innerHTML = Math.ceil(count);

        if (count >= target)
        {
            counter.innerHTML = target;
            clearInterval(project)
        }
    }
})