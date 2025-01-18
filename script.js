document.addEventListener('DOMContentLoaded', () => {
    const createCircles = (color, count) => {
        const row = document.createElement('div');
        for (let i = 0; i < count; i++) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.backgroundColor = color;
            row.appendChild(circle);
        }
        return row;
    };

    const resetPage = () => {
        document.getElementById('circleContainer').innerHTML = '';
        document.getElementById('red').value = '';
        document.getElementById('green').value = '';
        document.getElementById('blue').value = '';
        document.getElementById('numberOfCircles').value = '';
        document.getElementById('start').style.display = 'none';
        document.getElementById('reset').style.display = 'none';
    };

    document.getElementById('submit').addEventListener('click', () => {
        const numberOfCircles = parseInt(document.getElementById('numberOfCircles').value) || alert("Please enter the Number of circles to display");
        if (numberOfCircles < 0 || numberOfCircles > 10) {
            alert("Please enter a number of circles between 0 and 10.");
            return;
        }

        const circleContainer = document.getElementById('circleContainer');
        circleContainer.innerHTML = '';
        circleContainer.appendChild(createCircles('red', numberOfCircles));
        circleContainer.appendChild(createCircles('green', numberOfCircles));
        circleContainer.appendChild(createCircles('blue', numberOfCircles));
        if(numberOfCircles){
            document.getElementById('start').style.display = 'inline-block';
            document.getElementById('reset').style.display = 'inline-block';
        }
    });

    document.getElementById('start').addEventListener('click', () => {
        const redTime = parseInt(document.getElementById('red').value) * 1000 || 0;
        const greenTime = parseInt(document.getElementById('green').value) * 1000 || 0;
        const blueTime = parseInt(document.getElementById('blue').value) * 1000 || 0;

        const rows = document.getElementById('circleContainer').children;

        if (rows.length === 3) {
            setTimeout(() => {
                rows[0].style.display = 'none';
                setTimeout(() => {
                    rows[1].style.display = 'none';
                    setTimeout(() => {
                        rows[2].style.display = 'none';
                    }, blueTime);
                }, greenTime);
            }, redTime);
            //after disappering circles display none of start and reset
            document.getElementById('start').style.display = 'none';
            document.getElementById('reset').style.display = 'none';
        }
    });

    document.getElementById('reset').addEventListener('click', resetPage);
});