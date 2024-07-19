// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Evaluacindelapoblacinalosviajesenmototaxi_3rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes en mototaxi" >= 0 AND "Evaluación de la población a los viajes en mototaxi" <= 0.25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mototaxi']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes en mototaxi']  <= 0.25));
    } else {
        return ((feature['Evaluación de la población a los viajes en mototaxi']  >= 0.0) && (feature['Evaluación de la población a los viajes en mototaxi']  <= 0.25));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmototaxi_3rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes en mototaxi" > 0.25 AND "Evaluación de la población a los viajes en mototaxi" <= 0.87

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mototaxi']  > 0.25) && (feature.properties['Evaluación de la población a los viajes en mototaxi']  <= 0.87));
    } else {
        return ((feature['Evaluación de la población a los viajes en mototaxi']  > 0.25) && (feature['Evaluación de la población a los viajes en mototaxi']  <= 0.87));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmototaxi_3rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes en mototaxi" > 0.87 AND "Evaluación de la población a los viajes en mototaxi" <= 1.63

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mototaxi']  > 0.87) && (feature.properties['Evaluación de la población a los viajes en mototaxi']  <= 1.63));
    } else {
        return ((feature['Evaluación de la población a los viajes en mototaxi']  > 0.87) && (feature['Evaluación de la población a los viajes en mototaxi']  <= 1.63));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmototaxi_3rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes en mototaxi" > 1.63 AND "Evaluación de la población a los viajes en mototaxi" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mototaxi']  > 1.63) && (feature.properties['Evaluación de la población a los viajes en mototaxi']  <= 3.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en mototaxi']  > 1.63) && (feature['Evaluación de la población a los viajes en mototaxi']  <= 3.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmototaxi_3rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes en mototaxi" > 3 AND "Evaluación de la población a los viajes en mototaxi" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mototaxi']  > 3.0) && (feature.properties['Evaluación de la población a los viajes en mototaxi']  <= 5.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en mototaxi']  > 3.0) && (feature['Evaluación de la población a los viajes en mototaxi']  <= 5.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentaxi_4rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes en taxi" >= 0 AND "Evaluación de la población a los viajes en taxi" <= 0.36

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en taxi']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes en taxi']  <= 0.36));
    } else {
        return ((feature['Evaluación de la población a los viajes en taxi']  >= 0.0) && (feature['Evaluación de la población a los viajes en taxi']  <= 0.36));
    }
}


function exp_Evaluacindelapoblacinalosviajesentaxi_4rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes en taxi" > 0.36 AND "Evaluación de la población a los viajes en taxi" <= 1.04

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en taxi']  > 0.36) && (feature.properties['Evaluación de la población a los viajes en taxi']  <= 1.04));
    } else {
        return ((feature['Evaluación de la población a los viajes en taxi']  > 0.36) && (feature['Evaluación de la población a los viajes en taxi']  <= 1.04));
    }
}


function exp_Evaluacindelapoblacinalosviajesentaxi_4rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes en taxi" > 1.04 AND "Evaluación de la población a los viajes en taxi" <= 1.88

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en taxi']  > 1.04) && (feature.properties['Evaluación de la población a los viajes en taxi']  <= 1.88));
    } else {
        return ((feature['Evaluación de la población a los viajes en taxi']  > 1.04) && (feature['Evaluación de la población a los viajes en taxi']  <= 1.88));
    }
}


function exp_Evaluacindelapoblacinalosviajesentaxi_4rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes en taxi" > 1.88 AND "Evaluación de la población a los viajes en taxi" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en taxi']  > 1.88) && (feature.properties['Evaluación de la población a los viajes en taxi']  <= 3.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en taxi']  > 1.88) && (feature['Evaluación de la población a los viajes en taxi']  <= 3.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentaxi_4rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes en taxi" > 3 AND "Evaluación de la población a los viajes en taxi" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en taxi']  > 3.0) && (feature.properties['Evaluación de la población a los viajes en taxi']  <= 4.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en taxi']  > 3.0) && (feature['Evaluación de la población a los viajes en taxi']  <= 4.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmexibs_5rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes en mexibús" >= 0 AND "Evaluación de la población a los viajes en mexibús" <= 0.28

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mexibús']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes en mexibús']  <= 0.28));
    } else {
        return ((feature['Evaluación de la población a los viajes en mexibús']  >= 0.0) && (feature['Evaluación de la población a los viajes en mexibús']  <= 0.28));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmexibs_5rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes en mexibús" > 0.28 AND "Evaluación de la población a los viajes en mexibús" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mexibús']  > 0.28) && (feature.properties['Evaluación de la población a los viajes en mexibús']  <= 1.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en mexibús']  > 0.28) && (feature['Evaluación de la población a los viajes en mexibús']  <= 1.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmexibs_5rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes en mexibús" > 1 AND "Evaluación de la población a los viajes en mexibús" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mexibús']  > 1.0) && (feature.properties['Evaluación de la población a los viajes en mexibús']  <= 2.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en mexibús']  > 1.0) && (feature['Evaluación de la población a los viajes en mexibús']  <= 2.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmexibs_5rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes en mexibús" > 2 AND "Evaluación de la población a los viajes en mexibús" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mexibús']  > 2.0) && (feature.properties['Evaluación de la población a los viajes en mexibús']  <= 3.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en mexibús']  > 2.0) && (feature['Evaluación de la población a los viajes en mexibús']  <= 3.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmexibs_5rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes en mexibús" > 3 AND "Evaluación de la población a los viajes en mexibús" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en mexibús']  > 3.0) && (feature.properties['Evaluación de la población a los viajes en mexibús']  <= 5.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en mexibús']  > 3.0) && (feature['Evaluación de la población a los viajes en mexibús']  <= 5.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmetro_6rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes en metro" >= 0 AND "Evaluación de la población a los viajes en metro" <= 0.26

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en metro']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes en metro']  <= 0.26));
    } else {
        return ((feature['Evaluación de la población a los viajes en metro']  >= 0.0) && (feature['Evaluación de la población a los viajes en metro']  <= 0.26));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmetro_6rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes en metro" > 0.26 AND "Evaluación de la población a los viajes en metro" <= 0.83

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en metro']  > 0.26) && (feature.properties['Evaluación de la población a los viajes en metro']  <= 0.83));
    } else {
        return ((feature['Evaluación de la población a los viajes en metro']  > 0.26) && (feature['Evaluación de la población a los viajes en metro']  <= 0.83));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmetro_6rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes en metro" > 0.83 AND "Evaluación de la población a los viajes en metro" <= 1.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en metro']  > 0.83) && (feature.properties['Evaluación de la población a los viajes en metro']  <= 1.5));
    } else {
        return ((feature['Evaluación de la población a los viajes en metro']  > 0.83) && (feature['Evaluación de la población a los viajes en metro']  <= 1.5));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmetro_6rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes en metro" > 1.5 AND "Evaluación de la población a los viajes en metro" <= 2.6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en metro']  > 1.5) && (feature.properties['Evaluación de la población a los viajes en metro']  <= 2.6));
    } else {
        return ((feature['Evaluación de la población a los viajes en metro']  > 1.5) && (feature['Evaluación de la población a los viajes en metro']  <= 2.6));
    }
}


function exp_Evaluacindelapoblacinalosviajesenmetro_6rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes en metro" > 2.6 AND "Evaluación de la población a los viajes en metro" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en metro']  > 2.6) && (feature.properties['Evaluación de la población a los viajes en metro']  <= 4.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en metro']  > 2.6) && (feature['Evaluación de la población a los viajes en metro']  <= 4.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentreninterurbanoysuburbano_7rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes en tren interurbano y suburbano" >= 0 AND "Evaluación de la población a los viajes en tren interurbano y suburbano" <= 0.32

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 0.32));
    } else {
        return ((feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  >= 0.0) && (feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 0.32));
    }
}


function exp_Evaluacindelapoblacinalosviajesentreninterurbanoysuburbano_7rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes en tren interurbano y suburbano" > 0.32 AND "Evaluación de la población a los viajes en tren interurbano y suburbano" <= 1.21

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  > 0.32) && (feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 1.21));
    } else {
        return ((feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  > 0.32) && (feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 1.21));
    }
}


function exp_Evaluacindelapoblacinalosviajesentreninterurbanoysuburbano_7rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes en tren interurbano y suburbano" > 1.21 AND "Evaluación de la población a los viajes en tren interurbano y suburbano" <= 1.95

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  > 1.21) && (feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 1.95));
    } else {
        return ((feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  > 1.21) && (feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 1.95));
    }
}


function exp_Evaluacindelapoblacinalosviajesentreninterurbanoysuburbano_7rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes en tren interurbano y suburbano" > 1.95 AND "Evaluación de la población a los viajes en tren interurbano y suburbano" <= 2.56

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  > 1.95) && (feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 2.56));
    } else {
        return ((feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  > 1.95) && (feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 2.56));
    }
}


function exp_Evaluacindelapoblacinalosviajesentreninterurbanoysuburbano_7rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes en tren interurbano y suburbano" > 2.56 AND "Evaluación de la población a los viajes en tren interurbano y suburbano" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  > 2.56) && (feature.properties['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 4.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  > 2.56) && (feature['Evaluación de la población a los viajes en tren interurbano y suburbano']  <= 4.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesforneos_8rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses foráneos" >= 0 AND "Evaluación de la población a los viajes en autobuses foráneos" <= 0.24

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  <= 0.24));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses foráneos']  >= 0.0) && (feature['Evaluación de la población a los viajes en autobuses foráneos']  <= 0.24));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesforneos_8rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses foráneos" > 0.24 AND "Evaluación de la población a los viajes en autobuses foráneos" <= 0.82

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  > 0.24) && (feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  <= 0.82));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses foráneos']  > 0.24) && (feature['Evaluación de la población a los viajes en autobuses foráneos']  <= 0.82));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesforneos_8rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses foráneos" > 0.82 AND "Evaluación de la población a los viajes en autobuses foráneos" <= 1.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  > 0.82) && (feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  <= 1.5));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses foráneos']  > 0.82) && (feature['Evaluación de la población a los viajes en autobuses foráneos']  <= 1.5));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesforneos_8rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses foráneos" > 1.5 AND "Evaluación de la población a los viajes en autobuses foráneos" <= 2.33

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  > 1.5) && (feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  <= 2.33));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses foráneos']  > 1.5) && (feature['Evaluación de la población a los viajes en autobuses foráneos']  <= 2.33));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesforneos_8rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses foráneos" > 2.33 AND "Evaluación de la población a los viajes en autobuses foráneos" <= 3.27

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  > 2.33) && (feature.properties['Evaluación de la población a los viajes en autobuses foráneos']  <= 3.27));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses foráneos']  > 2.33) && (feature['Evaluación de la población a los viajes en autobuses foráneos']  <= 3.27));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesycombis_9rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses y combis" >= 0 AND "Evaluación de la población a los viajes en autobuses y combis" <= 0.28

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses y combis']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes en autobuses y combis']  <= 0.28));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses y combis']  >= 0.0) && (feature['Evaluación de la población a los viajes en autobuses y combis']  <= 0.28));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesycombis_9rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses y combis" > 0.28 AND "Evaluación de la población a los viajes en autobuses y combis" <= 0.8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses y combis']  > 0.28) && (feature.properties['Evaluación de la población a los viajes en autobuses y combis']  <= 0.8));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses y combis']  > 0.28) && (feature['Evaluación de la población a los viajes en autobuses y combis']  <= 0.8));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesycombis_9rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses y combis" > 0.8 AND "Evaluación de la población a los viajes en autobuses y combis" <= 1.67

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses y combis']  > 0.8) && (feature.properties['Evaluación de la población a los viajes en autobuses y combis']  <= 1.67));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses y combis']  > 0.8) && (feature['Evaluación de la población a los viajes en autobuses y combis']  <= 1.67));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesycombis_9rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses y combis" > 1.67 AND "Evaluación de la población a los viajes en autobuses y combis" <= 2.56

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses y combis']  > 1.67) && (feature.properties['Evaluación de la población a los viajes en autobuses y combis']  <= 2.56));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses y combis']  > 1.67) && (feature['Evaluación de la población a los viajes en autobuses y combis']  <= 2.56));
    }
}


function exp_Evaluacindelapoblacinalosviajesenautobusesycombis_9rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes en autobuses y combis" > 2.56 AND "Evaluación de la población a los viajes en autobuses y combis" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en autobuses y combis']  > 2.56) && (feature.properties['Evaluación de la población a los viajes en autobuses y combis']  <= 4.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en autobuses y combis']  > 2.56) && (feature['Evaluación de la población a los viajes en autobuses y combis']  <= 4.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenbicicleta_10rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes en bicicleta" >= 0 AND "Evaluación de la población a los viajes en bicicleta" <= 0.26

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en bicicleta']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes en bicicleta']  <= 0.26));
    } else {
        return ((feature['Evaluación de la población a los viajes en bicicleta']  >= 0.0) && (feature['Evaluación de la población a los viajes en bicicleta']  <= 0.26));
    }
}


function exp_Evaluacindelapoblacinalosviajesenbicicleta_10rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes en bicicleta" > 0.26 AND "Evaluación de la población a los viajes en bicicleta" <= 0.84

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en bicicleta']  > 0.26) && (feature.properties['Evaluación de la población a los viajes en bicicleta']  <= 0.84));
    } else {
        return ((feature['Evaluación de la población a los viajes en bicicleta']  > 0.26) && (feature['Evaluación de la población a los viajes en bicicleta']  <= 0.84));
    }
}


function exp_Evaluacindelapoblacinalosviajesenbicicleta_10rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes en bicicleta" > 0.84 AND "Evaluación de la población a los viajes en bicicleta" <= 1.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en bicicleta']  > 0.84) && (feature.properties['Evaluación de la población a los viajes en bicicleta']  <= 1.5));
    } else {
        return ((feature['Evaluación de la población a los viajes en bicicleta']  > 0.84) && (feature['Evaluación de la población a los viajes en bicicleta']  <= 1.5));
    }
}


function exp_Evaluacindelapoblacinalosviajesenbicicleta_10rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes en bicicleta" > 1.5 AND "Evaluación de la población a los viajes en bicicleta" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en bicicleta']  > 1.5) && (feature.properties['Evaluación de la población a los viajes en bicicleta']  <= 3.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en bicicleta']  > 1.5) && (feature['Evaluación de la población a los viajes en bicicleta']  <= 3.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesenbicicleta_10rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes en bicicleta" > 3 AND "Evaluación de la población a los viajes en bicicleta" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes en bicicleta']  > 3.0) && (feature.properties['Evaluación de la población a los viajes en bicicleta']  <= 5.0));
    } else {
        return ((feature['Evaluación de la población a los viajes en bicicleta']  > 3.0) && (feature['Evaluación de la población a los viajes en bicicleta']  <= 5.0));
    }
}


function exp_Evaluacindelapoblacinalosviajescaminando_11rule0_eval_expression(context) {
    // "Evaluación de la población a los viajes caminando" >= 0 AND "Evaluación de la población a los viajes caminando" <= 0.29

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes caminando']  >= 0.0) && (feature.properties['Evaluación de la población a los viajes caminando']  <= 0.29));
    } else {
        return ((feature['Evaluación de la población a los viajes caminando']  >= 0.0) && (feature['Evaluación de la población a los viajes caminando']  <= 0.29));
    }
}


function exp_Evaluacindelapoblacinalosviajescaminando_11rule1_eval_expression(context) {
    // "Evaluación de la población a los viajes caminando" > 0.29 AND "Evaluación de la población a los viajes caminando" <= 1.02

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes caminando']  > 0.29) && (feature.properties['Evaluación de la población a los viajes caminando']  <= 1.02));
    } else {
        return ((feature['Evaluación de la población a los viajes caminando']  > 0.29) && (feature['Evaluación de la población a los viajes caminando']  <= 1.02));
    }
}


function exp_Evaluacindelapoblacinalosviajescaminando_11rule2_eval_expression(context) {
    // "Evaluación de la población a los viajes caminando" > 1.02 AND "Evaluación de la población a los viajes caminando" <= 2.28

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes caminando']  > 1.02) && (feature.properties['Evaluación de la población a los viajes caminando']  <= 2.28));
    } else {
        return ((feature['Evaluación de la población a los viajes caminando']  > 1.02) && (feature['Evaluación de la población a los viajes caminando']  <= 2.28));
    }
}


function exp_Evaluacindelapoblacinalosviajescaminando_11rule3_eval_expression(context) {
    // "Evaluación de la población a los viajes caminando" > 2.28 AND "Evaluación de la población a los viajes caminando" <= 3.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes caminando']  > 2.28) && (feature.properties['Evaluación de la población a los viajes caminando']  <= 3.5));
    } else {
        return ((feature['Evaluación de la población a los viajes caminando']  > 2.28) && (feature['Evaluación de la población a los viajes caminando']  <= 3.5));
    }
}


function exp_Evaluacindelapoblacinalosviajescaminando_11rule4_eval_expression(context) {
    // "Evaluación de la población a los viajes caminando" > 3.5 AND "Evaluación de la población a los viajes caminando" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Evaluación de la población a los viajes caminando']  > 3.5) && (feature.properties['Evaluación de la población a los viajes caminando']  <= 5.0));
    } else {
        return ((feature['Evaluación de la población a los viajes caminando']  > 3.5) && (feature['Evaluación de la población a los viajes caminando']  <= 5.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexibs_12rule0_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" >= 0 AND "Calificación de la población a prestadores del servicio del mexicable" <= 0.24

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  >= 0.0) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 0.24));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  >= 0.0) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 0.24));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexibs_12rule1_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" > 0.24 AND "Calificación de la población a prestadores del servicio del mexicable" <= 0.83

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  > 0.24) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 0.83));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  > 0.24) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 0.83));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexibs_12rule2_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" > 0.83 AND "Calificación de la población a prestadores del servicio del mexicable" <= 1.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  > 0.83) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 1.5));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  > 0.83) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 1.5));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexibs_12rule3_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" > 1.5 AND "Calificación de la población a prestadores del servicio del mexicable" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  > 1.5) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 3.0));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  > 1.5) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 3.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexibs_12rule4_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" > 3 AND "Calificación de la población a prestadores del servicio del mexicable" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  > 3.0) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 5.0));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  > 3.0) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 5.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexicable_13rule0_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" >= 0 AND "Calificación de la población a prestadores del servicio del mexicable" <= 0.24

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  >= 0.0) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 0.24));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  >= 0.0) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 0.24));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexicable_13rule1_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" > 0.24 AND "Calificación de la población a prestadores del servicio del mexicable" <= 0.83

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  > 0.24) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 0.83));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  > 0.24) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 0.83));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexicable_13rule2_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" > 0.83 AND "Calificación de la población a prestadores del servicio del mexicable" <= 1.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  > 0.83) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 1.5));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  > 0.83) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 1.5));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexicable_13rule3_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" > 1.5 AND "Calificación de la población a prestadores del servicio del mexicable" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  > 1.5) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 3.0));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  > 1.5) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 3.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodelmexicable_13rule4_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del mexicable" > 3 AND "Calificación de la población a prestadores del servicio del mexicable" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del mexicable']  > 3.0) && (feature.properties['Calificación de la población a prestadores del servicio del mexicable']  <= 5.0));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del mexicable']  > 3.0) && (feature['Calificación de la población a prestadores del servicio del mexicable']  <= 5.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeltrensuburbanoeinterurbano_14rule0_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" >= 0 AND "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" <= 0.42

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  >= 0.0) && (feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 0.42));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  >= 0.0) && (feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 0.42));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeltrensuburbanoeinterurbano_14rule1_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" > 0.42 AND "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" <= 1.16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  > 0.42) && (feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 1.16));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  > 0.42) && (feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 1.16));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeltrensuburbanoeinterurbano_14rule2_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" > 1.16 AND "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" <= 1.8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  > 1.16) && (feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 1.8));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  > 1.16) && (feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 1.8));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeltrensuburbanoeinterurbano_14rule3_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" > 1.8 AND "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" <= 2.46

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  > 1.8) && (feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 2.46));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  > 1.8) && (feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 2.46));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeltrensuburbanoeinterurbano_14rule4_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" > 2.46 AND "Calificación de la población a prestadores del servicio del tren suburbano e interurbano" <= 3.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  > 2.46) && (feature.properties['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 3.5));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  > 2.46) && (feature['Calificación de la población a prestadores del servicio del tren suburbano e interurbano']  <= 3.5));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodemototaxis_15rule0_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de mototaxis" >= 0 AND "Calificación de la población a prestadores del servicio de mototaxis" <= 0.2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  >= 0.0) && (feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  <= 0.2));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de mototaxis']  >= 0.0) && (feature['Calificación de la población a prestadores del servicio de mototaxis']  <= 0.2));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodemototaxis_15rule1_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de mototaxis" > 0.2 AND "Calificación de la población a prestadores del servicio de mototaxis" <= 0.67

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  > 0.2) && (feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  <= 0.67));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de mototaxis']  > 0.2) && (feature['Calificación de la población a prestadores del servicio de mototaxis']  <= 0.67));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodemototaxis_15rule2_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de mototaxis" > 0.67 AND "Calificación de la población a prestadores del servicio de mototaxis" <= 1.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  > 0.67) && (feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  <= 1.5));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de mototaxis']  > 0.67) && (feature['Calificación de la población a prestadores del servicio de mototaxis']  <= 1.5));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodemototaxis_15rule3_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de mototaxis" > 1.5 AND "Calificación de la población a prestadores del servicio de mototaxis" <= 3.33

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  > 1.5) && (feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  <= 3.33));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de mototaxis']  > 1.5) && (feature['Calificación de la población a prestadores del servicio de mototaxis']  <= 3.33));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodemototaxis_15rule4_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de mototaxis" > 3.33 AND "Calificación de la población a prestadores del servicio de mototaxis" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  > 3.33) && (feature.properties['Calificación de la población a prestadores del servicio de mototaxis']  <= 5.0));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de mototaxis']  > 3.33) && (feature['Calificación de la población a prestadores del servicio de mototaxis']  <= 5.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodetaxis_16rule0_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de taxis" >= 0 AND "Calificación de la población a prestadores del servicio de taxis" <= 0.25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de taxis']  >= 0.0) && (feature.properties['Calificación de la población a prestadores del servicio de taxis']  <= 0.25));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de taxis']  >= 0.0) && (feature['Calificación de la población a prestadores del servicio de taxis']  <= 0.25));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodetaxis_16rule1_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de taxis" > 0.25 AND "Calificación de la población a prestadores del servicio de taxis" <= 1.08

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de taxis']  > 0.25) && (feature.properties['Calificación de la población a prestadores del servicio de taxis']  <= 1.08));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de taxis']  > 0.25) && (feature['Calificación de la población a prestadores del servicio de taxis']  <= 1.08));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodetaxis_16rule2_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de taxis" > 1.08 AND "Calificación de la población a prestadores del servicio de taxis" <= 2.16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de taxis']  > 1.08) && (feature.properties['Calificación de la población a prestadores del servicio de taxis']  <= 2.16));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de taxis']  > 1.08) && (feature['Calificación de la población a prestadores del servicio de taxis']  <= 2.16));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodetaxis_16rule3_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de taxis" > 2.16 AND "Calificación de la población a prestadores del servicio de taxis" <= 3.5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de taxis']  > 2.16) && (feature.properties['Calificación de la población a prestadores del servicio de taxis']  <= 3.5));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de taxis']  > 2.16) && (feature['Calificación de la población a prestadores del servicio de taxis']  <= 3.5));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodetaxis_16rule4_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de taxis" > 3.5 AND "Calificación de la población a prestadores del servicio de taxis" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de taxis']  > 3.5) && (feature.properties['Calificación de la población a prestadores del servicio de taxis']  <= 5.0));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de taxis']  > 3.5) && (feature['Calificación de la población a prestadores del servicio de taxis']  <= 5.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesforneos_17rule0_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" >= 0 AND "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" <= 0.54

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  >= 0.0) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 0.54));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  >= 0.0) && (feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 0.54));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesforneos_17rule1_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" > 0.54 AND "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" <= 1.4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  > 0.54) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 1.4));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  > 0.54) && (feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 1.4));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesforneos_17rule2_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" > 1.4 AND "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" <= 2.33

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  > 1.4) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 2.33));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  > 1.4) && (feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 2.33));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesforneos_17rule3_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" > 2.33 AND "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" <= 3.25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  > 2.33) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 3.25));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  > 2.33) && (feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 3.25));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesforneos_17rule4_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" > 3.25 AND "Calificación de la población a prestadores del servicio de autobuses foráneos y combis" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  > 3.25) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 5.0));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  > 3.25) && (feature['Calificación de la población a prestadores del servicio de autobuses foráneos y combis']  <= 5.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesycombis_18rule1_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses y combis" > 0 AND "Calificación de la población a prestadores del servicio de autobuses y combis" <= 0.48

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses y combis']  > 0.0) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses y combis']  <= 0.48));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses y combis']  > 0.0) && (feature['Calificación de la población a prestadores del servicio de autobuses y combis']  <= 0.48));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesycombis_18rule2_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses y combis" > 0.48 AND "Calificación de la población a prestadores del servicio de autobuses y combis" <= 1.606

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses y combis']  > 0.48) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses y combis']  <= 1.606));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses y combis']  > 0.48) && (feature['Calificación de la población a prestadores del servicio de autobuses y combis']  <= 1.606));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesycombis_18rule3_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses y combis" > 1.606 AND "Calificación de la población a prestadores del servicio de autobuses y combis" <= 2.15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses y combis']  > 1.606) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses y combis']  <= 2.15));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses y combis']  > 1.606) && (feature['Calificación de la población a prestadores del servicio de autobuses y combis']  <= 2.15));
    }
}


function exp_Calificacindelapoblacinaprestadoresdelserviciodeautobusesycombis_18rule4_eval_expression(context) {
    // "Calificación de la población a prestadores del servicio de autobuses y combis" > 2.15 AND "Calificación de la población a prestadores del servicio de autobuses y combis" <= 3.12

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Calificación de la población a prestadores del servicio de autobuses y combis']  > 2.15) && (feature.properties['Calificación de la población a prestadores del servicio de autobuses y combis']  <= 3.12));
    } else {
        return ((feature['Calificación de la población a prestadores del servicio de autobuses y combis']  > 2.15) && (feature['Calificación de la población a prestadores del servicio de autobuses y combis']  <= 3.12));
    }
}


function exp_Personasqueviajandoenmototaxishansufridoacoso_19rule0_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido acoso" >= 0.1 AND "Personas que viajando en mototaxis han sufrido acoso" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido acoso']  >= 0.1) && (feature.properties['Personas que viajando en mototaxis han sufrido acoso']  <= 1.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido acoso']  >= 0.1) && (feature['Personas que viajando en mototaxis han sufrido acoso']  <= 1.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridoacoso_19rule1_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido acoso" > 1 AND "Personas que viajando en mototaxis han sufrido acoso" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido acoso']  > 1.0) && (feature.properties['Personas que viajando en mototaxis han sufrido acoso']  <= 4.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido acoso']  > 1.0) && (feature['Personas que viajando en mototaxis han sufrido acoso']  <= 4.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridoacoso_19rule2_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido acoso" > 4 AND "Personas que viajando en mototaxis han sufrido acoso" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido acoso']  > 4.0) && (feature.properties['Personas que viajando en mototaxis han sufrido acoso']  <= 8.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido acoso']  > 4.0) && (feature['Personas que viajando en mototaxis han sufrido acoso']  <= 8.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridoacoso_19rule3_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido acoso" > 8 AND "Personas que viajando en mototaxis han sufrido acoso" <= 16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido acoso']  > 8.0) && (feature.properties['Personas que viajando en mototaxis han sufrido acoso']  <= 16.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido acoso']  > 8.0) && (feature['Personas que viajando en mototaxis han sufrido acoso']  <= 16.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridoacoso_19rule4_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido acoso" > 16 AND "Personas que viajando en mototaxis han sufrido acoso" <= 41

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido acoso']  > 16.0) && (feature.properties['Personas que viajando en mototaxis han sufrido acoso']  <= 41.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido acoso']  > 16.0) && (feature['Personas que viajando en mototaxis han sufrido acoso']  <= 41.0));
    }
}


function exp_Personasqueviajandoentaxihansufridoacoso_20rule0_eval_expression(context) {
    // "Personas que viajando en taxi han sufrido acoso" >= 0.1 AND "Personas que viajando en taxi han sufrido acoso" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxi han sufrido acoso']  >= 0.1) && (feature.properties['Personas que viajando en taxi han sufrido acoso']  <= 3.0));
    } else {
        return ((feature['Personas que viajando en taxi han sufrido acoso']  >= 0.1) && (feature['Personas que viajando en taxi han sufrido acoso']  <= 3.0));
    }
}


function exp_Personasqueviajandoentaxihansufridoacoso_20rule1_eval_expression(context) {
    // "Personas que viajando en taxi han sufrido acoso" > 3 AND "Personas que viajando en taxi han sufrido acoso" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxi han sufrido acoso']  > 3.0) && (feature.properties['Personas que viajando en taxi han sufrido acoso']  <= 8.0));
    } else {
        return ((feature['Personas que viajando en taxi han sufrido acoso']  > 3.0) && (feature['Personas que viajando en taxi han sufrido acoso']  <= 8.0));
    }
}


function exp_Personasqueviajandoentaxihansufridoacoso_20rule2_eval_expression(context) {
    // "Personas que viajando en taxi han sufrido acoso" > 8 AND "Personas que viajando en taxi han sufrido acoso" <= 22

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxi han sufrido acoso']  > 8.0) && (feature.properties['Personas que viajando en taxi han sufrido acoso']  <= 22.0));
    } else {
        return ((feature['Personas que viajando en taxi han sufrido acoso']  > 8.0) && (feature['Personas que viajando en taxi han sufrido acoso']  <= 22.0));
    }
}


function exp_Personasqueviajandoentaxihansufridoacoso_20rule3_eval_expression(context) {
    // "Personas que viajando en taxi han sufrido acoso" > 22 AND "Personas que viajando en taxi han sufrido acoso" <= 32

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxi han sufrido acoso']  > 22.0) && (feature.properties['Personas que viajando en taxi han sufrido acoso']  <= 32.0));
    } else {
        return ((feature['Personas que viajando en taxi han sufrido acoso']  > 22.0) && (feature['Personas que viajando en taxi han sufrido acoso']  <= 32.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridoacoso_21rule0_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido acoso" > 0.1 AND "Personas que viajando en mexicable han sufrido acoso" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido acoso']  > 0.1) && (feature.properties['Personas que viajando en mexicable han sufrido acoso']  <= 2.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido acoso']  > 0.1) && (feature['Personas que viajando en mexicable han sufrido acoso']  <= 2.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridoacoso_21rule1_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido acoso" > 2 AND "Personas que viajando en mexicable han sufrido acoso" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido acoso']  > 2.0) && (feature.properties['Personas que viajando en mexicable han sufrido acoso']  <= 6.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido acoso']  > 2.0) && (feature['Personas que viajando en mexicable han sufrido acoso']  <= 6.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridoacoso_21rule2_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido acoso" > 6 AND "Personas que viajando en mexicable han sufrido acoso" <= 17

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido acoso']  > 6.0) && (feature.properties['Personas que viajando en mexicable han sufrido acoso']  <= 17.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido acoso']  > 6.0) && (feature['Personas que viajando en mexicable han sufrido acoso']  <= 17.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridoacoso_21rule3_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido acoso" > 17 AND "Personas que viajando en mexicable han sufrido acoso" <= 26

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido acoso']  > 17.0) && (feature.properties['Personas que viajando en mexicable han sufrido acoso']  <= 26.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido acoso']  > 17.0) && (feature['Personas que viajando en mexicable han sufrido acoso']  <= 26.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridoacoso_22rule0_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido acoso" >= 0.1 AND "Personas que viajando en mexibús han sufrido acoso" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido acoso']  >= 0.1) && (feature.properties['Personas que viajando en mexibús han sufrido acoso']  <= 2.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido acoso']  >= 0.1) && (feature['Personas que viajando en mexibús han sufrido acoso']  <= 2.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridoacoso_22rule1_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido acoso" > 2 AND "Personas que viajando en mexibús han sufrido acoso" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido acoso']  > 2.0) && (feature.properties['Personas que viajando en mexibús han sufrido acoso']  <= 10.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido acoso']  > 2.0) && (feature['Personas que viajando en mexibús han sufrido acoso']  <= 10.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridoacoso_22rule2_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido acoso" > 10 AND "Personas que viajando en mexibús han sufrido acoso" <= 19

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido acoso']  > 10.0) && (feature.properties['Personas que viajando en mexibús han sufrido acoso']  <= 19.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido acoso']  > 10.0) && (feature['Personas que viajando en mexibús han sufrido acoso']  <= 19.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridoacoso_22rule3_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido acoso" > 19 AND "Personas que viajando en mexibús han sufrido acoso" <= 32

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido acoso']  > 19.0) && (feature.properties['Personas que viajando en mexibús han sufrido acoso']  <= 32.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido acoso']  > 19.0) && (feature['Personas que viajando en mexibús han sufrido acoso']  <= 32.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridoacoso_23rule0_eval_expression(context) {
    // "Personas que viajando en metro han sufrido acoso" > 0.1 AND "Personas que viajando en metro han sufrido acoso" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido acoso']  > 0.1) && (feature.properties['Personas que viajando en metro han sufrido acoso']  <= 3.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido acoso']  > 0.1) && (feature['Personas que viajando en metro han sufrido acoso']  <= 3.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridoacoso_23rule1_eval_expression(context) {
    // "Personas que viajando en metro han sufrido acoso" > 3 AND "Personas que viajando en metro han sufrido acoso" <= 9

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido acoso']  > 3.0) && (feature.properties['Personas que viajando en metro han sufrido acoso']  <= 9.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido acoso']  > 3.0) && (feature['Personas que viajando en metro han sufrido acoso']  <= 9.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridoacoso_23rule2_eval_expression(context) {
    // "Personas que viajando en metro han sufrido acoso" > 9 AND "Personas que viajando en metro han sufrido acoso" <= 21

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido acoso']  > 9.0) && (feature.properties['Personas que viajando en metro han sufrido acoso']  <= 21.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido acoso']  > 9.0) && (feature['Personas que viajando en metro han sufrido acoso']  <= 21.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridoacoso_23rule3_eval_expression(context) {
    // "Personas que viajando en metro han sufrido acoso" > 21 AND "Personas que viajando en metro han sufrido acoso" <= 35

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido acoso']  > 21.0) && (feature.properties['Personas que viajando en metro han sufrido acoso']  <= 35.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido acoso']  > 21.0) && (feature['Personas que viajando en metro han sufrido acoso']  <= 35.0));
    }
}


function exp_Personasquecaminandohansufridoacoso_24rule0_eval_expression(context) {
    // "Personas que caminando han sufrido acoso" >= 0.1 AND "Personas que caminando han sufrido acoso" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido acoso']  >= 0.1) && (feature.properties['Personas que caminando han sufrido acoso']  <= 3.0));
    } else {
        return ((feature['Personas que caminando han sufrido acoso']  >= 0.1) && (feature['Personas que caminando han sufrido acoso']  <= 3.0));
    }
}


function exp_Personasquecaminandohansufridoacoso_24rule1_eval_expression(context) {
    // "Personas que caminando han sufrido acoso" > 3 AND "Personas que caminando han sufrido acoso" <= 16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido acoso']  > 3.0) && (feature.properties['Personas que caminando han sufrido acoso']  <= 16.0));
    } else {
        return ((feature['Personas que caminando han sufrido acoso']  > 3.0) && (feature['Personas que caminando han sufrido acoso']  <= 16.0));
    }
}


function exp_Personasquecaminandohansufridoacoso_24rule2_eval_expression(context) {
    // "Personas que caminando han sufrido acoso" > 16 AND "Personas que caminando han sufrido acoso" <= 43

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido acoso']  > 16.0) && (feature.properties['Personas que caminando han sufrido acoso']  <= 43.0));
    } else {
        return ((feature['Personas que caminando han sufrido acoso']  > 16.0) && (feature['Personas que caminando han sufrido acoso']  <= 43.0));
    }
}


function exp_Personasquecaminandohansufridoacoso_24rule3_eval_expression(context) {
    // "Personas que caminando han sufrido acoso" > 43 AND "Personas que caminando han sufrido acoso" <= 73

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido acoso']  > 43.0) && (feature.properties['Personas que caminando han sufrido acoso']  <= 73.0));
    } else {
        return ((feature['Personas que caminando han sufrido acoso']  > 43.0) && (feature['Personas que caminando han sufrido acoso']  <= 73.0));
    }
}


function exp_Personasquecaminandohansufridoacoso_24rule4_eval_expression(context) {
    // "Personas que caminando han sufrido acoso" > 73 AND "Personas que caminando han sufrido acoso" <= 87

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido acoso']  > 73.0) && (feature.properties['Personas que caminando han sufrido acoso']  <= 87.0));
    } else {
        return ((feature['Personas que caminando han sufrido acoso']  > 73.0) && (feature['Personas que caminando han sufrido acoso']  <= 87.0));
    }
}


function exp_Personasqueviajandoenbusesycombishansufridoacoso_25rule0_eval_expression(context) {
    // "Personas que viajando en bus han sufrido acoso" >= 0.1 AND "Personas que viajando en bus han sufrido acoso" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus han sufrido acoso']  >= 0.1) && (feature.properties['Personas que viajando en bus han sufrido acoso']  <= 2.0));
    } else {
        return ((feature['Personas que viajando en bus han sufrido acoso']  >= 0.1) && (feature['Personas que viajando en bus han sufrido acoso']  <= 2.0));
    }
}


function exp_Personasqueviajandoenbusesycombishansufridoacoso_25rule1_eval_expression(context) {
    // "Personas que viajando en bus han sufrido acoso" > 2 AND "Personas que viajando en bus han sufrido acoso" <= 9

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus han sufrido acoso']  > 2.0) && (feature.properties['Personas que viajando en bus han sufrido acoso']  <= 9.0));
    } else {
        return ((feature['Personas que viajando en bus han sufrido acoso']  > 2.0) && (feature['Personas que viajando en bus han sufrido acoso']  <= 9.0));
    }
}


function exp_Personasqueviajandoenbusesycombishansufridoacoso_25rule2_eval_expression(context) {
    // "Personas que viajando en bus han sufrido acoso" > 9 AND "Personas que viajando en bus han sufrido acoso" <= 33

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus han sufrido acoso']  > 9.0) && (feature.properties['Personas que viajando en bus han sufrido acoso']  <= 33.0));
    } else {
        return ((feature['Personas que viajando en bus han sufrido acoso']  > 9.0) && (feature['Personas que viajando en bus han sufrido acoso']  <= 33.0));
    }
}


function exp_Personasqueviajandoenbusesycombishansufridoacoso_25rule3_eval_expression(context) {
    // "Personas que viajando en bus han sufrido acoso" > 33 AND "Personas que viajando en bus han sufrido acoso" <= 81

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus han sufrido acoso']  > 33.0) && (feature.properties['Personas que viajando en bus han sufrido acoso']  <= 81.0));
    } else {
        return ((feature['Personas que viajando en bus han sufrido acoso']  > 33.0) && (feature['Personas que viajando en bus han sufrido acoso']  <= 81.0));
    }
}


function exp_Personasqueviajandoenbusesycombishansufridoacoso_25rule4_eval_expression(context) {
    // "Personas que viajando en bus han sufrido acoso" > 81 AND "Personas que viajando en bus han sufrido acoso" <= 125

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus han sufrido acoso']  > 81.0) && (feature.properties['Personas que viajando en bus han sufrido acoso']  <= 125.0));
    } else {
        return ((feature['Personas que viajando en bus han sufrido acoso']  > 81.0) && (feature['Personas que viajando en bus han sufrido acoso']  <= 125.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridoacoso_26rule0_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido acoso" >= 0.1 AND "Personas que viajando en bus foráneo han sufrido acoso" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  >= 0.1) && (feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  <= 1.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido acoso']  >= 0.1) && (feature['Personas que viajando en bus foráneo han sufrido acoso']  <= 1.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridoacoso_26rule1_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido acoso" > 1 AND "Personas que viajando en bus foráneo han sufrido acoso" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  > 1.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  <= 4.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido acoso']  > 1.0) && (feature['Personas que viajando en bus foráneo han sufrido acoso']  <= 4.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridoacoso_26rule2_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido acoso" > 4 AND "Personas que viajando en bus foráneo han sufrido acoso" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  > 4.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  <= 10.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido acoso']  > 4.0) && (feature['Personas que viajando en bus foráneo han sufrido acoso']  <= 10.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridoacoso_26rule3_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido acoso" > 10 AND "Personas que viajando en bus foráneo han sufrido acoso" <= 27

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  > 10.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  <= 27.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido acoso']  > 10.0) && (feature['Personas que viajando en bus foráneo han sufrido acoso']  <= 27.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridoacoso_26rule4_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido acoso" > 27 AND "Personas que viajando en bus foráneo han sufrido acoso" <= 71

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  > 27.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido acoso']  <= 71.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido acoso']  > 27.0) && (feature['Personas que viajando en bus foráneo han sufrido acoso']  <= 71.0));
    }
}


function exp_Personasqueviajandoenbicihansufridoacoso_27rule0_eval_expression(context) {
    // "Personas que viajando en bici han sufrido acoso" >= 0.1 AND "Personas que viajando en bici han sufrido acoso" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido acoso']  >= 0.1) && (feature.properties['Personas que viajando en bici han sufrido acoso']  <= 3.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido acoso']  >= 0.1) && (feature['Personas que viajando en bici han sufrido acoso']  <= 3.0));
    }
}


function exp_Personasqueviajandoenbicihansufridoacoso_27rule1_eval_expression(context) {
    // "Personas que viajando en bici han sufrido acoso" > 3 AND "Personas que viajando en bici han sufrido acoso" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido acoso']  > 3.0) && (feature.properties['Personas que viajando en bici han sufrido acoso']  <= 8.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido acoso']  > 3.0) && (feature['Personas que viajando en bici han sufrido acoso']  <= 8.0));
    }
}


function exp_Personasqueviajandoenbicihansufridoacoso_27rule2_eval_expression(context) {
    // "Personas que viajando en bici han sufrido acoso" > 8 AND "Personas que viajando en bici han sufrido acoso" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido acoso']  > 8.0) && (feature.properties['Personas que viajando en bici han sufrido acoso']  <= 20.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido acoso']  > 8.0) && (feature['Personas que viajando en bici han sufrido acoso']  <= 20.0));
    }
}


function exp_Personasqueviajandoenbicihansufridoacoso_27rule3_eval_expression(context) {
    // "Personas que viajando en bici han sufrido acoso" > 20 AND "Personas que viajando en bici han sufrido acoso" <= 34

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido acoso']  > 20.0) && (feature.properties['Personas que viajando en bici han sufrido acoso']  <= 34.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido acoso']  > 20.0) && (feature['Personas que viajando en bici han sufrido acoso']  <= 34.0));
    }
}


function exp_Personasqueviajandoentaxishansufridodiscriminacinporserdelaterceraedad_28rule0_eval_expression(context) {
    // "Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad" >= 0.1 AND "Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature.properties['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  <= 2.0));
    } else {
        return ((feature['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  <= 2.0));
    }
}


function exp_Personasqueviajandoentaxishansufridodiscriminacinporserdelaterceraedad_28rule1_eval_expression(context) {
    // "Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad" > 2 AND "Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  > 2.0) && (feature.properties['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  <= 6.0));
    } else {
        return ((feature['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  > 2.0) && (feature['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  <= 6.0));
    }
}


function exp_Personasqueviajandoentaxishansufridodiscriminacinporserdelaterceraedad_28rule2_eval_expression(context) {
    // "Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad" > 6 AND "Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad" <= 18

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  > 6.0) && (feature.properties['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  <= 18.0));
    } else {
        return ((feature['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  > 6.0) && (feature['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  <= 18.0));
    }
}


function exp_Personasqueviajandoentaxishansufridodiscriminacinporserdelaterceraedad_28rule3_eval_expression(context) {
    // "Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad" > 18 AND "Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad" <= 29

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  > 18.0) && (feature.properties['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  <= 29.0));
    } else {
        return ((feature['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  > 18.0) && (feature['Personas que viajando en taxis han sufrido discriminación por ser de la tercera edad']  <= 29.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridodiscriminacinporserdelaterceraedad_29rule0_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" >= 0.1 AND "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 1.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 1.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridodiscriminacinporserdelaterceraedad_29rule1_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" > 1 AND "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  > 1.0) && (feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 5.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  > 1.0) && (feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 5.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridodiscriminacinporserdelaterceraedad_29rule2_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" > 5 AND "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  > 5.0) && (feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 10.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  > 5.0) && (feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 10.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridodiscriminacinporserdelaterceraedad_29rule3_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" > 10 AND "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" <= 23

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  > 10.0) && (feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 23.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  > 10.0) && (feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 23.0));
    }
}


function exp_Personasqueviajandoenmototaxishansufridodiscriminacinporserdelaterceraedad_29rule4_eval_expression(context) {
    // "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" > 23 AND "Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad" <= 48

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  > 23.0) && (feature.properties['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 48.0));
    } else {
        return ((feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  > 23.0) && (feature['Personas que viajando en mototaxis han sufrido discriminación por ser de la tercera edad']  <= 48.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinporserdelaterceraedad_30rule0_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" >= 0.1 AND "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 2.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 2.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinporserdelaterceraedad_30rule1_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" > 2 AND "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  > 2.0) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 6.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  > 2.0) && (feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 6.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinporserdelaterceraedad_30rule2_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" > 6 AND "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  > 6.0) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 15.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  > 6.0) && (feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 15.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinporserdelaterceraedad_30rule3_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" > 15 AND "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" <= 31

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  > 15.0) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 31.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  > 15.0) && (feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 31.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinporserdelaterceraedad_30rule4_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" > 31 AND "Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad" <= 48

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  > 31.0) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 48.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  > 31.0) && (feature['Personas que viajando en mexicable han sufrido discriminación por ser de la tercera edad']  <= 48.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinporserdelaterceraedad_31rule0_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" >= 0.1 AND "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 1.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 1.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinporserdelaterceraedad_31rule1_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" > 1 AND "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  > 1.0) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 5.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  > 1.0) && (feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 5.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinporserdelaterceraedad_31rule2_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" > 5 AND "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" <= 16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  > 5.0) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 16.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  > 5.0) && (feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 16.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinporserdelaterceraedad_31rule3_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" > 16 AND "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" <= 38

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  > 16.0) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 38.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  > 16.0) && (feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 38.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinporserdelaterceraedad_31rule4_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" > 38 AND "Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  > 38.0) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 60.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  > 38.0) && (feature['Personas que viajando en mexibús han sufrido discriminación por ser de la tercera edad']  <= 60.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridodiscriminacinporserdelaterceraedad_32rule0_eval_expression(context) {
    // "Personas que viajando en metro han sufrido discriminación por ser de la tercera edad" >= 0.1 AND "Personas que viajando en metro han sufrido discriminación por ser de la tercera edad" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature.properties['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  <= 3.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  <= 3.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridodiscriminacinporserdelaterceraedad_32rule1_eval_expression(context) {
    // "Personas que viajando en metro han sufrido discriminación por ser de la tercera edad" > 3 AND "Personas que viajando en metro han sufrido discriminación por ser de la tercera edad" <= 16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  > 3.0) && (feature.properties['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  <= 16.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  > 3.0) && (feature['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  <= 16.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridodiscriminacinporserdelaterceraedad_32rule2_eval_expression(context) {
    // "Personas que viajando en metro han sufrido discriminación por ser de la tercera edad" > 16 AND "Personas que viajando en metro han sufrido discriminación por ser de la tercera edad" <= 35

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  > 16.0) && (feature.properties['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  <= 35.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  > 16.0) && (feature['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  <= 35.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridodiscriminacinporserdelaterceraedad_32rule3_eval_expression(context) {
    // "Personas que viajando en metro han sufrido discriminación por ser de la tercera edad" > 35 AND "Personas que viajando en metro han sufrido discriminación por ser de la tercera edad" <= 68

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  > 35.0) && (feature.properties['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  <= 68.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  > 35.0) && (feature['Personas que viajando en metro han sufrido discriminación por ser de la tercera edad']  <= 68.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinporserdelaterceraedad_33rule0_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por ser de la tercera edad" >= 0.1 AND "Personas que caminando han sufrido discriminación por ser de la tercera edad" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 3.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 3.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinporserdelaterceraedad_33rule1_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por ser de la tercera edad" > 3 AND "Personas que caminando han sufrido discriminación por ser de la tercera edad" <= 13

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  > 3.0) && (feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 13.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  > 3.0) && (feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 13.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinporserdelaterceraedad_33rule2_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por ser de la tercera edad" > 13 AND "Personas que caminando han sufrido discriminación por ser de la tercera edad" <= 32

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  > 13.0) && (feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 32.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  > 13.0) && (feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 32.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinporserdelaterceraedad_33rule3_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por ser de la tercera edad" > 32 AND "Personas que caminando han sufrido discriminación por ser de la tercera edad" <= 68

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  > 32.0) && (feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 68.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  > 32.0) && (feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 68.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinporserdelaterceraedad_33rule4_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por ser de la tercera edad" > 68 AND "Personas que caminando han sufrido discriminación por ser de la tercera edad" <= 99

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  > 68.0) && (feature.properties['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 99.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  > 68.0) && (feature['Personas que caminando han sufrido discriminación por ser de la tercera edad']  <= 99.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinporserdelaterceraedad_34rule0_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" >= 0.1 AND "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 1.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 1.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinporserdelaterceraedad_34rule1_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" > 1 AND "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" <= 7

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  > 1.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 7.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  > 1.0) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 7.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinporserdelaterceraedad_34rule2_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" > 7 AND "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" <= 17

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  > 7.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 17.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  > 7.0) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 17.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinporserdelaterceraedad_34rule3_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" > 17 AND "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" <= 64

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  > 17.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 64.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  > 17.0) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 64.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinporserdelaterceraedad_34rule4_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" > 64 AND "Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad" <= 280

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  > 64.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 280.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  > 64.0) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por ser de la tercera edad']  <= 280.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinporserdelaterceraedad_35rule0_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" >= 0.1 AND "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 1.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  >= 0.1) && (feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 1.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinporserdelaterceraedad_35rule1_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" > 1 AND "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  > 1.0) && (feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 5.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  > 1.0) && (feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 5.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinporserdelaterceraedad_35rule2_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" > 5 AND "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" <= 12

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  > 5.0) && (feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 12.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  > 5.0) && (feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 12.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinporserdelaterceraedad_35rule3_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" > 12 AND "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" <= 37

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  > 12.0) && (feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 37.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  > 12.0) && (feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 37.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinporserdelaterceraedad_35rule4_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" > 37 AND "Personas que viajando en bici han sufrido discriminación por ser de la tercera edad" <= 59

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  > 37.0) && (feature.properties['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 59.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  > 37.0) && (feature['Personas que viajando en bici han sufrido discriminación por ser de la tercera edad']  <= 59.0));
    }
}


function exp_Personasqueviajandoentaxishansufridodiscriminacinpordiscapacidad_36rule0_eval_expression(context) {
    // "Personas que viajando en taxis han sufrido discriminación por discapacidad" >= 0 AND "Personas que viajando en taxis han sufrido discriminación por discapacidad" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxis han sufrido discriminación por discapacidad']  >= 0.0) && (feature.properties['Personas que viajando en taxis han sufrido discriminación por discapacidad']  <= 3.0));
    } else {
        return ((feature['Personas que viajando en taxis han sufrido discriminación por discapacidad']  >= 0.0) && (feature['Personas que viajando en taxis han sufrido discriminación por discapacidad']  <= 3.0));
    }
}


function exp_Personasqueviajandoentaxishansufridodiscriminacinpordiscapacidad_36rule1_eval_expression(context) {
    // "Personas que viajando en taxis han sufrido discriminación por discapacidad" > 3 AND "Personas que viajando en taxis han sufrido discriminación por discapacidad" <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxis han sufrido discriminación por discapacidad']  > 3.0) && (feature.properties['Personas que viajando en taxis han sufrido discriminación por discapacidad']  <= 14.0));
    } else {
        return ((feature['Personas que viajando en taxis han sufrido discriminación por discapacidad']  > 3.0) && (feature['Personas que viajando en taxis han sufrido discriminación por discapacidad']  <= 14.0));
    }
}


function exp_Personasqueviajandoentaxishansufridodiscriminacinpordiscapacidad_36rule2_eval_expression(context) {
    // "Personas que viajando en taxis han sufrido discriminación por discapacidad" > 14 AND "Personas que viajando en taxis han sufrido discriminación por discapacidad" <= 32

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxis han sufrido discriminación por discapacidad']  > 14.0) && (feature.properties['Personas que viajando en taxis han sufrido discriminación por discapacidad']  <= 32.0));
    } else {
        return ((feature['Personas que viajando en taxis han sufrido discriminación por discapacidad']  > 14.0) && (feature['Personas que viajando en taxis han sufrido discriminación por discapacidad']  <= 32.0));
    }
}


function exp_Personasqueviajandoentaxishansufridodiscriminacinpordiscapacidad_36rule3_eval_expression(context) {
    // "Personas que viajando en taxis han sufrido discriminación por discapacidad" > 32 AND "Personas que viajando en taxis han sufrido discriminación por discapacidad" <= 78

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en taxis han sufrido discriminación por discapacidad']  > 32.0) && (feature.properties['Personas que viajando en taxis han sufrido discriminación por discapacidad']  <= 78.0));
    } else {
        return ((feature['Personas que viajando en taxis han sufrido discriminación por discapacidad']  > 32.0) && (feature['Personas que viajando en taxis han sufrido discriminación por discapacidad']  <= 78.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinpordiscapacidad_37rule0_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por discapacidad" >= 0.1 AND "Personas que viajando en mexicable han sufrido discriminación por discapacidad" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  >= 0.1) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  <= 2.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  >= 0.1) && (feature['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  <= 2.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinpordiscapacidad_37rule1_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por discapacidad" > 2 AND "Personas que viajando en mexicable han sufrido discriminación por discapacidad" <= 11

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  > 2.0) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  <= 11.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  > 2.0) && (feature['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  <= 11.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinpordiscapacidad_37rule2_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por discapacidad" > 11 AND "Personas que viajando en mexicable han sufrido discriminación por discapacidad" <= 31

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  > 11.0) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  <= 31.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  > 11.0) && (feature['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  <= 31.0));
    }
}


function exp_Personasqueviajandoenmexicablehansufridodiscriminacinpordiscapacidad_37rule3_eval_expression(context) {
    // "Personas que viajando en mexicable han sufrido discriminación por discapacidad" > 31 AND "Personas que viajando en mexicable han sufrido discriminación por discapacidad" <= 48

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  > 31.0) && (feature.properties['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  <= 48.0));
    } else {
        return ((feature['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  > 31.0) && (feature['Personas que viajando en mexicable han sufrido discriminación por discapacidad']  <= 48.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinpordiscapacidad_38rule0_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por discapacidad" >= 0.1 AND "Personas que viajando en mexibús han sufrido discriminación por discapacidad" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  >= 0.1) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  <= 2.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  >= 0.1) && (feature['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  <= 2.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinpordiscapacidad_38rule1_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por discapacidad" > 2 AND "Personas que viajando en mexibús han sufrido discriminación por discapacidad" <= 16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  > 2.0) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  <= 16.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  > 2.0) && (feature['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  <= 16.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinpordiscapacidad_38rule2_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por discapacidad" > 16 AND "Personas que viajando en mexibús han sufrido discriminación por discapacidad" <= 38

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  > 16.0) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  <= 38.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  > 16.0) && (feature['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  <= 38.0));
    }
}


function exp_Personasqueviajandoenmexibshansufridodiscriminacinpordiscapacidad_38rule3_eval_expression(context) {
    // "Personas que viajando en mexibús han sufrido discriminación por discapacidad" > 38 AND "Personas que viajando en mexibús han sufrido discriminación por discapacidad" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  > 38.0) && (feature.properties['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  <= 60.0));
    } else {
        return ((feature['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  > 38.0) && (feature['Personas que viajando en mexibús han sufrido discriminación por discapacidad']  <= 60.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridodiscriminacinpordiscapacidad_39rule0_eval_expression(context) {
    // "Personas que viajando en metro han sufrido discriminación por discapacidad" >= 0.1 AND "Personas que viajando en metro han sufrido discriminación por discapacidad" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido discriminación por discapacidad']  >= 0.1) && (feature.properties['Personas que viajando en metro han sufrido discriminación por discapacidad']  <= 2.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido discriminación por discapacidad']  >= 0.1) && (feature['Personas que viajando en metro han sufrido discriminación por discapacidad']  <= 2.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridodiscriminacinpordiscapacidad_39rule1_eval_expression(context) {
    // "Personas que viajando en metro han sufrido discriminación por discapacidad" > 2 AND "Personas que viajando en metro han sufrido discriminación por discapacidad" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido discriminación por discapacidad']  > 2.0) && (feature.properties['Personas que viajando en metro han sufrido discriminación por discapacidad']  <= 6.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido discriminación por discapacidad']  > 2.0) && (feature['Personas que viajando en metro han sufrido discriminación por discapacidad']  <= 6.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridodiscriminacinpordiscapacidad_39rule2_eval_expression(context) {
    // "Personas que viajando en metro han sufrido discriminación por discapacidad" > 6 AND "Personas que viajando en metro han sufrido discriminación por discapacidad" <= 35

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido discriminación por discapacidad']  > 6.0) && (feature.properties['Personas que viajando en metro han sufrido discriminación por discapacidad']  <= 35.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido discriminación por discapacidad']  > 6.0) && (feature['Personas que viajando en metro han sufrido discriminación por discapacidad']  <= 35.0));
    }
}


function exp_Personasqueviajandoenmetrohansufridodiscriminacinpordiscapacidad_39rule3_eval_expression(context) {
    // "Personas que viajando en metro han sufrido discriminación por discapacidad" > 35 AND "Personas que viajando en metro han sufrido discriminación por discapacidad" <= 68

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en metro han sufrido discriminación por discapacidad']  > 35.0) && (feature.properties['Personas que viajando en metro han sufrido discriminación por discapacidad']  <= 68.0));
    } else {
        return ((feature['Personas que viajando en metro han sufrido discriminación por discapacidad']  > 35.0) && (feature['Personas que viajando en metro han sufrido discriminación por discapacidad']  <= 68.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinpordiscapacidad_40rule0_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por discapacidad" >= 0.1 AND "Personas que caminando han sufrido discriminación por discapacidad" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por discapacidad']  >= 0.1) && (feature.properties['Personas que caminando han sufrido discriminación por discapacidad']  <= 8.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por discapacidad']  >= 0.1) && (feature['Personas que caminando han sufrido discriminación por discapacidad']  <= 8.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinpordiscapacidad_40rule1_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por discapacidad" > 8 AND "Personas que caminando han sufrido discriminación por discapacidad" <= 32

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por discapacidad']  > 8.0) && (feature.properties['Personas que caminando han sufrido discriminación por discapacidad']  <= 32.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por discapacidad']  > 8.0) && (feature['Personas que caminando han sufrido discriminación por discapacidad']  <= 32.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinpordiscapacidad_40rule2_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por discapacidad" > 32 AND "Personas que caminando han sufrido discriminación por discapacidad" <= 68

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por discapacidad']  > 32.0) && (feature.properties['Personas que caminando han sufrido discriminación por discapacidad']  <= 68.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por discapacidad']  > 32.0) && (feature['Personas que caminando han sufrido discriminación por discapacidad']  <= 68.0));
    }
}


function exp_Personasquecaminandohansufridodiscriminacinpordiscapacidad_40rule3_eval_expression(context) {
    // "Personas que caminando han sufrido discriminación por discapacidad" > 68 AND "Personas que caminando han sufrido discriminación por discapacidad" <= 99

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que caminando han sufrido discriminación por discapacidad']  > 68.0) && (feature.properties['Personas que caminando han sufrido discriminación por discapacidad']  <= 99.0));
    } else {
        return ((feature['Personas que caminando han sufrido discriminación por discapacidad']  > 68.0) && (feature['Personas que caminando han sufrido discriminación por discapacidad']  <= 99.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinpordiscapacidad_41rule0_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por discapacidad" >= 0.1 AND "Personas que viajando en bus foráneo han sufrido discriminación por discapacidad" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  >= 0.1) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  <= 5.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  >= 0.1) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  <= 5.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinpordiscapacidad_41rule1_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por discapacidad" > 5 AND "Personas que viajando en bus foráneo han sufrido discriminación por discapacidad" <= 17

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  > 5.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  <= 17.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  > 5.0) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  <= 17.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinpordiscapacidad_41rule2_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por discapacidad" > 17 AND "Personas que viajando en bus foráneo han sufrido discriminación por discapacidad" <= 64

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  > 17.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  <= 64.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  > 17.0) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  <= 64.0));
    }
}


function exp_Personasqueviajandoenbusforneohansufridodiscriminacinpordiscapacidad_41rule3_eval_expression(context) {
    // "Personas que viajando en bus foráneo han sufrido discriminación por discapacidad" > 64 AND "Personas que viajando en bus foráneo han sufrido discriminación por discapacidad" <= 280

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  > 64.0) && (feature.properties['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  <= 280.0));
    } else {
        return ((feature['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  > 64.0) && (feature['Personas que viajando en bus foráneo han sufrido discriminación por discapacidad']  <= 280.0));
    }
}


function exp_Personasqueviajandoenbusovagonetahansufridodiscriminacinpordiscapacidad_42rule0_eval_expression(context) {
    // "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" >= 0.1 AND "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  >= 0.1) && (feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 10.0));
    } else {
        return ((feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  >= 0.1) && (feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 10.0));
    }
}


function exp_Personasqueviajandoenbusovagonetahansufridodiscriminacinpordiscapacidad_42rule1_eval_expression(context) {
    // "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" > 10 AND "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" <= 32

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  > 10.0) && (feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 32.0));
    } else {
        return ((feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  > 10.0) && (feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 32.0));
    }
}


function exp_Personasqueviajandoenbusovagonetahansufridodiscriminacinpordiscapacidad_42rule2_eval_expression(context) {
    // "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" > 32 AND "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" <= 80

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  > 32.0) && (feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 80.0));
    } else {
        return ((feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  > 32.0) && (feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 80.0));
    }
}


function exp_Personasqueviajandoenbusovagonetahansufridodiscriminacinpordiscapacidad_42rule3_eval_expression(context) {
    // "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" > 80 AND "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" <= 150

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  > 80.0) && (feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 150.0));
    } else {
        return ((feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  > 80.0) && (feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 150.0));
    }
}


function exp_Personasqueviajandoenbusovagonetahansufridodiscriminacinpordiscapacidad_42rule4_eval_expression(context) {
    // "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" > 150 AND "Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad" <= 515

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  > 150.0) && (feature.properties['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 515.0));
    } else {
        return ((feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  > 150.0) && (feature['Personas que viajando en bus o vagoneta han sufrido discriminación por discapacidad']  <= 515.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinpordiscapacidad_43rule0_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por discapacidad" >= 1 AND "Personas que viajando en bici han sufrido discriminación por discapacidad" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por discapacidad']  >= 1.0) && (feature.properties['Personas que viajando en bici han sufrido discriminación por discapacidad']  <= 5.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por discapacidad']  >= 1.0) && (feature['Personas que viajando en bici han sufrido discriminación por discapacidad']  <= 5.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinpordiscapacidad_43rule1_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por discapacidad" > 5 AND "Personas que viajando en bici han sufrido discriminación por discapacidad" <= 12

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por discapacidad']  > 5.0) && (feature.properties['Personas que viajando en bici han sufrido discriminación por discapacidad']  <= 12.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por discapacidad']  > 5.0) && (feature['Personas que viajando en bici han sufrido discriminación por discapacidad']  <= 12.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinpordiscapacidad_43rule2_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por discapacidad" > 12 AND "Personas que viajando en bici han sufrido discriminación por discapacidad" <= 37

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por discapacidad']  > 12.0) && (feature.properties['Personas que viajando en bici han sufrido discriminación por discapacidad']  <= 37.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por discapacidad']  > 12.0) && (feature['Personas que viajando en bici han sufrido discriminación por discapacidad']  <= 37.0));
    }
}


function exp_Personasqueviajandoenbicihansufridodiscriminacinpordiscapacidad_43rule3_eval_expression(context) {
    // "Personas que viajando en bici han sufrido discriminación por discapacidad" > 37 AND "Personas que viajando en bici han sufrido discriminación por discapacidad" <= 59

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Personas que viajando en bici han sufrido discriminación por discapacidad']  > 37.0) && (feature.properties['Personas que viajando en bici han sufrido discriminación por discapacidad']  <= 59.0));
    } else {
        return ((feature['Personas que viajando en bici han sufrido discriminación por discapacidad']  > 37.0) && (feature['Personas que viajando en bici han sufrido discriminación por discapacidad']  <= 59.0));
    }
}


function exp_Horariodeviajeviajesrealizadosdurantelamadrugadaylatarde_44rule0_eval_expression(context) {
    // "Viajes durante la madrugada y la tarde" >= 0.1 AND "Viajes durante la madrugada y la tarde" <= 7

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes durante la madrugada y la tarde']  >= 0.1) && (feature.properties['Viajes durante la madrugada y la tarde']  <= 7.0));
    } else {
        return ((feature['Viajes durante la madrugada y la tarde']  >= 0.1) && (feature['Viajes durante la madrugada y la tarde']  <= 7.0));
    }
}


function exp_Horariodeviajeviajesrealizadosdurantelamadrugadaylatarde_44rule1_eval_expression(context) {
    // "Viajes durante la madrugada y la tarde" > 7 AND "Viajes durante la madrugada y la tarde" <= 23

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes durante la madrugada y la tarde']  > 7.0) && (feature.properties['Viajes durante la madrugada y la tarde']  <= 23.0));
    } else {
        return ((feature['Viajes durante la madrugada y la tarde']  > 7.0) && (feature['Viajes durante la madrugada y la tarde']  <= 23.0));
    }
}


function exp_Horariodeviajeviajesrealizadosdurantelamadrugadaylatarde_44rule2_eval_expression(context) {
    // "Viajes durante la madrugada y la tarde" > 23 AND "Viajes durante la madrugada y la tarde" <= 79

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes durante la madrugada y la tarde']  > 23.0) && (feature.properties['Viajes durante la madrugada y la tarde']  <= 79.0));
    } else {
        return ((feature['Viajes durante la madrugada y la tarde']  > 23.0) && (feature['Viajes durante la madrugada y la tarde']  <= 79.0));
    }
}


function exp_Horariodeviajeviajesrealizadosdurantelamadrugadaylatarde_44rule3_eval_expression(context) {
    // "Viajes durante la madrugada y la tarde" > 79 AND "Viajes durante la madrugada y la tarde" <= 381

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes durante la madrugada y la tarde']  > 79.0) && (feature.properties['Viajes durante la madrugada y la tarde']  <= 381.0));
    } else {
        return ((feature['Viajes durante la madrugada y la tarde']  > 79.0) && (feature['Viajes durante la madrugada y la tarde']  <= 381.0));
    }
}


function exp_Minutosdeesperaparaabordareltransportepblico_45rule0_eval_expression(context) {
    // "Minutos de espera" >= 0.1 AND "Minutos de espera" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Minutos de espera']  >= 0.1) && (feature.properties['Minutos de espera']  <= 10));
    } else {
        return ((feature['Minutos de espera']  >= 0.1) && (feature['Minutos de espera']  <= 10));
    }
}


function exp_Minutosdeesperaparaabordareltransportepblico_45rule1_eval_expression(context) {
    // "Minutos de espera" > 10 AND "Minutos de espera" <= 12

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Minutos de espera']  > 10) && (feature.properties['Minutos de espera']  <= 12));
    } else {
        return ((feature['Minutos de espera']  > 10) && (feature['Minutos de espera']  <= 12));
    }
}


function exp_Minutosdeesperaparaabordareltransportepblico_45rule2_eval_expression(context) {
    // "Minutos de espera" > 12 AND "Minutos de espera" <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Minutos de espera']  > 12) && (feature.properties['Minutos de espera']  <= 14));
    } else {
        return ((feature['Minutos de espera']  > 12) && (feature['Minutos de espera']  <= 14));
    }
}


function exp_Minutosdeesperaparaabordareltransportepblico_45rule3_eval_expression(context) {
    // 

    var feature = context.feature;
    
    if (feature.properties) {
        return null;
    } else {
        return null;
    }
}


function exp_Duracindeviajesminutos_46rule0_eval_expression(context) {
    // "Duración de viajes (minuto)" >= 0.1 AND "Duración de viajes (minuto)" <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  >= 0.1) && (feature.properties['Duración de viajes (minuto)']  <= 30));
    } else {
        return ((feature['Duración de viajes (minuto)']  >= 0.1) && (feature['Duración de viajes (minuto)']  <= 30));
    }
}


function exp_Duracindeviajesminutos_46rule1_eval_expression(context) {
    // "Duración de viajes (minuto)" > 30 AND "Duración de viajes (minuto)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  > 30) && (feature.properties['Duración de viajes (minuto)']  <= 60.0));
    } else {
        return ((feature['Duración de viajes (minuto)']  > 30) && (feature['Duración de viajes (minuto)']  <= 60.0));
    }
}


function exp_Duracindeviajesminutos_46rule2_eval_expression(context) {
    // "Duración de viajes (minuto)" > 60 AND "Duración de viajes (minuto)" <= 120

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  > 60.0) && (feature.properties['Duración de viajes (minuto)']  <= 120));
    } else {
        return ((feature['Duración de viajes (minuto)']  > 60.0) && (feature['Duración de viajes (minuto)']  <= 120));
    }
}


function exp_Duracindeviajesminutos_46rule3_eval_expression(context) {
    // "Duración de viajes (minuto)" > 120 AND "Duración de viajes (minuto)" <= 180

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  > 120) && (feature.properties['Duración de viajes (minuto)']  <= 180.0));
    } else {
        return ((feature['Duración de viajes (minuto)']  > 120) && (feature['Duración de viajes (minuto)']  <= 180.0));
    }
}


function exp_Duracindeviajesminutos_46rule4_eval_expression(context) {
    // "Duración de viajes (minuto)" > 180 AND "Duración de viajes (minuto)" <= 240

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  > 180) && (feature.properties['Duración de viajes (minuto)']  <= 240.0));
    } else {
        return ((feature['Duración de viajes (minuto)']  > 180) && (feature['Duración de viajes (minuto)']  <= 240.0));
    }
}