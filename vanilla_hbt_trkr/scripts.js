$(document).ready(function() {
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Create date headers
    for (let i = 1; i <= daysInMonth; i++) {
        $("thead tr").append(`<th>${i}</th>`);
    }

    // Add new habit function
    $("#addHabit").click(function() {
        let habitName = prompt("Enter habit name:"); 
        if (habitName) {
            let row = `<tr><td>${habitName}</td>`;
            for (let i = 1; i <= daysInMonth; i++) {
                row += `<td><input type="checkbox" class="habit-check"></td>`;
            }
            row += "</tr>";
            $("tbody").append(row);
        }
    });

    // Track habit completion
    $(document).on("change", ".habit-check", function() {
        if ($(this).is(":checked")) {
            $(this).parent().addClass("completed");
        } else {
            $(this).parent().removeClass("completed");
        }
    });
});
