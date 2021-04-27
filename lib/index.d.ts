declare const _default: {
    getSassConfig: () => {
        "css-config": {
            modules: {
                animation: {
                    _metadata: {};
                    _data: {
                        attention_props: {};
                        in_out_props: {
                            back: {};
                            bounce: {};
                            slide: {};
                            fade: {};
                            zoom: {};
                        };
                    };
                    _docs: {
                        attention_props: string;
                        in_out_props: string;
                    };
                };
                base: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        CFG_HAS_DIMENSION_STRICT: boolean;
                        CFG_HAS_DIMENSION_MIN: boolean;
                        CFG_HAS_DIMENSION_MAX: boolean;
                        grid_class_name: string;
                        grid_class_name_short: string;
                        table_class_name: string;
                        table_class_name_short: string;
                        text_class_name: string;
                        text_class_name_short: string;
                        menu_class_name: string;
                        menu_class_name_short: string;
                        media_quey_sizes: {
                            sm: number;
                            md: number;
                            lg: number;
                            xl: number;
                            xxl: number;
                        };
                        color_schemes_props: {
                            info: string;
                            alert: string;
                            error: string;
                            warning: string;
                            discrete: string;
                            success: string;
                            waiting: string;
                        };
                        color_palette_props: {
                            normal: string;
                            alert: string;
                            error: string;
                            warning: string;
                            discrete: string;
                            success: string;
                            waiting: string;
                        };
                        color_grays: {
                            gray_start: string;
                            gray_end: string;
                            gray_steps: number;
                        };
                        grid_ratios: number[];
                    };
                    _docs: {
                        CFG_HAS_DIMENSION_STRICT: string;
                        CFG_HAS_DIMENSION_MIN: string;
                        CFG_HAS_DIMENSION_MAX: string;
                        grid_class_name: string;
                        table_class_name: string;
                        table_class_name_short: string;
                        media_quey_sizes: string;
                        grid_ratios: string;
                        text_class_name_short: string;
                        text_class_name: string;
                        grid_class_name_short: string;
                        menu_class_name: string;
                        menu_class_name_short: string;
                        color_schemes_props: string;
                        color_palette_props: string;
                        color_grays: string;
                    };
                };
                box: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        box_unit: string;
                        box_unit_size: string;
                        box_sizes: number;
                        box_css_props_shorthands: {
                            brd: string;
                            pad: string;
                            marg: string;
                        };
                        box_border_shorthands: {
                            t: string;
                            b: string;
                            l: string;
                            r: string;
                            all: string;
                            u: string;
                            ii: string;
                            tb: string;
                        };
                        box_position_props: {
                            abs: string;
                            rel: string;
                            stat: string;
                            fix: string;
                            sticky: string;
                        };
                        box_display_props: {
                            block: string;
                            none: string;
                            inline: string;
                            "block-inline": string;
                            "flex-inline": string;
                            tbl: string;
                            "tbl-row": string;
                            "tbl-cell": string;
                            "tbl-column": string;
                            unset: string;
                        };
                    };
                    _docs: {
                        box_unit: string;
                        box_unit_size: string;
                        box_sizes: string;
                        box_css_props_shorthands: string;
                        box_border_shorthands: string;
                        box_position_props: string;
                        box_display_props: string;
                    };
                };
                grid: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _docs: {
                        grid_separator: string;
                        grid_hor_code: string;
                        grid_vert_code: string;
                    };
                    _data: {
                        grid_separator: string;
                        grid_hor_code: string;
                        grid_vert_code: string;
                    };
                };
                input: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        input_size_unit: string;
                        input_size: {
                            tiny: number;
                            medium: number;
                            default: number;
                            large: number;
                            full: string;
                            custom: number;
                        };
                        input_type: string[];
                        input_attr: string[];
                    };
                    _docs: {
                        input_size_unit: string;
                        input_size: string;
                        input_type: string;
                        input_attr: string;
                    };
                };
                menu: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        orientations: {
                            v: string;
                            h: string;
                        };
                        menu_item_class_name: string;
                        menu_item_class_name_short: string;
                        menu_item_disabled_tag: string;
                        menu_item_selected_tag: string;
                        menu_dropdown_tag: string;
                        menu_dropdown_open: string;
                        menu_dropdown_close: string;
                    };
                    _docs: {
                        menu_item_class_name: string;
                        menu_item_class_name_short: string;
                        menu_dropdown_tag: string;
                        menu_item_disabled_tag: string;
                        menu_item_selected_tag: string;
                        orientations: string;
                        menu_dropdown_open: string;
                        menu_dropdown_close: string;
                    };
                };
                overflow: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        overflow_props: string;
                        overflow_values: string;
                    };
                    _docs: {
                        overflow_props: string;
                        overflow_values: string;
                    };
                };
                scale: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        scale_size: string;
                        scale_props: {
                            width: string;
                            height: string;
                        };
                        scale_css_values: string[];
                        scale_shorthands: {
                            full: string;
                            mid: string;
                            quarter: string;
                            tiers: string;
                        };
                        scale_defined_sizes: number[];
                        scale_grid_ratios: number[];
                    };
                    _docs: {
                        scale_size: string;
                        scale_props: string;
                        scale_css_values: string;
                        scale_shorthands: string;
                        scale_defined_sizes: string;
                        scale_grid_ratios: string;
                    };
                };
                table: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        table_bg_color_head: string;
                        table_bg_color_strip_main: string;
                        table_bg_color_strip_second: string;
                        table_border_color_header: string;
                        table_border_color_main: string;
                        table_border_color_second: string;
                    };
                    _docs: {
                        table_bg_color_head: string;
                        table_bg_color_strip_main: string;
                        table_bg_color_strip_second: string;
                        table_border_color_header: string;
                        table_border_color_main: string;
                        table_border_color_second: string;
                    };
                };
                text: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        font_sizes: number;
                        font_sizes_unit: string;
                        font_sizes_h1_em: number;
                        font_sizes_h_min_em: number;
                        font_predefined_colors: {
                            msg: string;
                            alert: string;
                            warning: string;
                            important: string;
                            default: string;
                        };
                        text_ellipsis_tag: string;
                        text_transform: {
                            cap: string;
                            up: string;
                            low: string;
                            none: string;
                            full: string;
                        };
                        font_weights: {
                            "50": number;
                            "100": number;
                            "300": number;
                            "500": number;
                            "900": number;
                            light: string;
                            cap: string;
                            bold: string;
                            bolder: string;
                        };
                        text_align: {
                            l: string;
                            r: string;
                            c: string;
                            j: string;
                        };
                    };
                    _docs: {
                        font_sizes: string;
                        font_sizes_unit: string;
                        font_predefined_colors: string;
                        font_sizes_h1_em: string;
                        font_sizes_h_min_em: string;
                        text_ellipsis_tag: string;
                        text_transform: string;
                        font_weights: string;
                        text_align: string;
                    };
                };
                zindex: {
                    _metadata: {
                        title: string;
                        tag: string;
                        description: string;
                    };
                    _data: {
                        z_groups: string[];
                    };
                    _docs: {
                        z_groups: string;
                    };
                };
            };
        };
    };
    getJsonConfig: (module?: string) => any;
};
export default _default;
