import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'Filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: Array<any>, query: string, fields: Array<String>): any {
        var filtered = new Array();
        if (query) {
            query = query.toString().trim();
            if (query.length && value) {
                query = query.toLowerCase();
                filtered = value.filter((element) => {
                    for (var e in element) {
                        if (typeof element[e] == "object") {
                            for (var i in element[e]) {
                                if (element[e][i]) {
                                    var value = element[e][i].toString().toLowerCase();
                                    var v = e + '.' + i;
                                    if (!fields) {
                                        if (value.search(query) >= 0) {
                                            return element;
                                        }
                                    } else if (fields.indexOf(v) >= 0 && value.search(query) >= 0) {
                                        return element;
                                    }
                                }
                            }
                        } else {
                            if (element[e] != null) {
                                var value = element[e].toString().toLowerCase();
                                if (!fields) {
                                    if (value.search(query) >= 0) {
                                        return element;
                                    }
                                } else if (fields.indexOf(e) >= 0 && value.search(query) >= 0) {
                                    return element;
                                }
                            }
                        }
                    }
                });
                return filtered;
            } else {
                return value;
            }
        }
        else {
            return value;
        }

    }
}