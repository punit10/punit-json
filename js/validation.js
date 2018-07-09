$(document).ready(function () {
    $("#btn-submit").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var date = $("#date").val();
        var id = $("#rowid").val();
        if (name == '') {
            alert("Error !! Name is Required");
            $("#name").focus();
            return false;
        } else if (email == '') {
            alert("Error !! Email is Required");
            $("#email").focus();
            return false;
        } else if (message == '') {
            alert("Error !! Messaege Can't be Empty.");
            $("#message").focus();
            return false;
            tr
        } else if (date == '') {
            alert('Error !! Date is Required.');
            $("#date").focus();
            return false;
        } else {
            if (id) {
                $("tbody").find("#" + id).html("<td>" + name + "</td><td>" + email + "</td><td>" + message + "</td><td>" + date + "</td><td><button class='edit btn btn-info'>Edit</button></td>");
            } else {
                $("tbody").prepend("<tr><td>" + name + "</td><td>" + email + "</td><td>" + message + "</td><td>" + date + "</td><td><button class='edit btn btn-info'>Edit</button></td></tr>");
            }
            $.ajax({
                type: "POST",
                url: "data-insert.php",
                data: ({
                    id: id,
                    name: name,
                    email: email,
                    message: message,
                    date: date
                }),
                dataType: "json",
                success: function (response) {}
            });
            $("#rowid").val('');
            $("#name").val('');
            $("#email").val('');
            $("#message").val('');
            $("#date").val('');
            return false;
        }
    }); //end click function
    var count = 1;
    $(".date-sort").on({
        click: function () {
            count++;
            var sort = '';
            if (count % 2) {
                sort = 'ASC';
            } else {
                sort = 'DESC';
            }
            sortBYdate(sort);
        }
    });
    showData();
    function sortBYdate(sort) {
        //setInterval(function () {
        var table = '';
        $.ajax({
            type: "POST",
            url: "data-sort.php",
            datatype: "json",
            data: ({
                sort: sort
            }),
            success: function (data) {
                var student = $.parseJSON(data);
                $.each(student, function (index, value) {
                    table = table +
                        "<tr id=" + value.id +
                        "><td class='id' style='display:none'>" + value.id +
                        "</td><td class = 'n'>" + value.name +
                        "</td><td class='e'>" + value.email +
                        "</td><td class='m'>" + value.message +
                        "</td><td class='d'>" + value.date +
                        "</td><td><button class='edit btn btn-info'>Edit</button></td></tr>";
                });
                $("tbody").html(table);
                $(".edit").click(function () {
                    $("#data-form #rowid").val($(this).parents("tr").children(
                        "td.id").text());
                    $("#data-form #name").val($(this).parents("tr").children(
                        "td.n").text());
                    $("#data-form #email").val($(this).parents("tr").children(
                        "td.e").text());
                    $("#data-form #message").val($(this).parents("tr").children(
                        "td.m").text());
                    $("#data-form #date").val($(this).parents("tr").children(
                        "td.d").text());
                });
            }
        });
        //}, 5 * 1000); //end setInterval        
    }

    function showData() {
        //setInterval(function () {
        var table = '';
        $.ajax({
            type: "POST",
            url: "data-get.php",
            datatype: "json",
            success: function (data) {
                var student = $.parseJSON(data);
                $.each(student, function (index, value) {
                    table = table +
                        "<tr id=" + value.id +
                        "><td class='id' style='display:none'>" + value.id +
                        "</td><td class = 'n'>" + value.name +
                        "</td><td class='e'>" + value.email +
                        "</td><td class='m'>" + value.message +
                        "</td><td class='d'>" + value.date +
                        "</td><td><button class='edit btn btn-info'>Edit</button></td></tr>";
                });
                $("tbody").html(table);
                $(".edit").click(function () {
                    $("#data-form #rowid").val($(this).parents("tr").children(
                        "td.id").text());
                    $("#data-form #name").val($(this).parents("tr").children(
                        "td.n").text());
                    $("#data-form #email").val($(this).parents("tr").children(
                        "td.e").text());
                    $("#data-form #message").val($(this).parents("tr").children(
                        "td.m").text());
                    $("#data-form #date").val($(this).parents("tr").children(
                        "td.d").text());
                });
            }
        });
        //}, 5 * 1000); //end setInterval
    }

});