$(function () {
    let url = "https://web.socem.plymouth.ac.uk/COMP3006/trains/trains";
    $.get(url, function (trains) {
        for (let i = 0; i < trains.trains.length; i++) {
            let train = trains.trains[i];
            let stops = train.stops;
            let destination = stops[stops.length - 1];
            $("#services").append(
                "<tr><td class=\"departs\">" + train.departs + "</td><td class=\"destination\">" + destination.name + "</td><td class=\"platform\">" + train.platform + "</td></tr>"
            );
        }
    });
});
