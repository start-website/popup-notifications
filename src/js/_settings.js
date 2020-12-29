var app = new Vue({
    delimiters: ['%%', '%%'],
    el: '.start',
    data: {
        count_settings_block: Number(document.querySelector('#count-settings-block').value),
        popup_id: Number(document.querySelector('#popup_id').value),
        custom_css: document.querySelector('#custom_css').value,
        plugin_url: document.querySelector('#plugin_url').value,
        custom_css_instruction: false,
        group_settings: [],
    },
    methods: {
        addBlock() {
            this.count_settings_block++;
            this.popup_id++;
            this.group_settings.push({
                main_settings_block: false,
                text_content_block: false,
                media_content_block: false,
                buttons_block: false,
                socialnetworks_block: false,
                form_block: false,
                color_scheme: false,
                display_conditions: false,
                popup_id: this.popup_id,
                type: 'action-media-top',
                position: 'center',
                animation: 'fade',
                remove_padding: 'false',
                round_corners: 'false',
                width: '650',
                height: '450',
                offset_right: '50',
                title: '',
                text: '',
                about_action: '',
                text_close: '',

                html: '',
                timer_date: '',
                timer_time: '',

                image_path_file: '',

                video_iframe: '',
                button_text_1: '',
                button_link_1: '',
                button_class_1: '',
                button_text_2: '',
                button_link_2: '',
                button_class_2: '',
                vk_id_group: '',
                od_id_group: '',
                facebook_src: '',
                share_social: '',

                settings_form_name_show: 'true',
                settings_form_tel_show: 'false',
                settings_form_email_show: 'true',
                settings_form_textarea_show: 'false',
                settings_form_time_show: 'false',

                settings_form_name_required: 'false',
                settings_form_tel_required: 'false',
                settings_form_email_required: 'true',
                settings_form_textarea_required: 'false',
                settings_form_time_required: 'false',

                settings_form_response: 'Thank You! We will contact you shortly.',
                privacy_link: '',

                basic_color: '',
                add_color: '',
                accent_color: '',
                popup_background_color: '',
                popup_background_opacity: '',
                modal_background_color: '',

                modal_background_image_file: '',

                form_filed_text_color: '',
                form_filed_background_color: '',
                border_color: '',

                click: '',
                anchor: '',
                count_display: '',
                seconds_show: '',
                show_specific_page: '',
                conditions_show_before_closing: 'false',
                show_date_start: '',
                show_date_end: '',
                show_days: '',
                show_hours_start: '',
                show_hours_end: '',
                show_procent_load: '',
                page_view_count: '',
                re_screening: '',
                conditions_show_only_mobile: 'false',
                show_again_popup: '',
            })
        },
        delBlock() {
            if (this.count_settings_block > 1) {
                this.count_settings_block--;
                this.group_settings.pop();
            }
        },
        checkImage(e) {
            const input = e.target;
            const buttonSubmit = document.querySelector('.buttom-sumbit');
            const inputBlockChilds = input.parentElement.parentElement.children;
            let hintError;
            let regex = /(png|jpe?g|gif|svg|webp)$/i;
    
            for (let i = 0; i < inputBlockChilds.length; i++) {
                const elem = inputBlockChilds[i];
  
                if (elem.className && elem.className.match(/hint-error/gi)) {
                    hintError = elem;
                }
            }
  
            if (!regex.test(input.value)) {
                hintError.style.display = 'block';
                buttonSubmit.disabled = true;
            } else {
                hintError.style.display = '';
                buttonSubmit.disabled = false;
            }
        },
        delImagePath(e, block_number, block_index) {
            const inputFile = document.querySelector(`#block_${block_number}_input_file`);
            const inputText = document.querySelector(`#block_${block_number}_input_text`);

            const inputFileDefault = inputFile.name;
            const inputTextDefault = inputText.name;
            
            this.group_settings[block_index].image_path_file = false;
            inputFile.name = inputTextDefault;
            inputText.name = inputFileDefault;
            inputText.value = '';
        },
        returnDefaultInputFileName(e, block_number, block_index) {
            e.target.name = `shop_startpopupnotifications[block_settings_${block_number}_image_path_file]`;
  
            const inputText = document.querySelector(`#block_${block_number}_input_text`);
            inputText.name = '';
            inputText.value = '';
        },
        delModalImage(e, block_number, block_index) {
            const inputFile = document.querySelector(`#block_${block_number}_modal_background_image_input_file`);
            const inputText = document.querySelector(`#block_${block_number}_modal_background_image_input_text`);

            const inputFileDefault = inputFile.name;
            const inputTextDefault = inputText.name;
            
            this.group_settings[block_index].modal_background_image_file = false;
            inputFile.name = inputTextDefault;
            inputText.name = inputFileDefault;
            inputText.value = '';
        },
        returnDefaultModalImageInputFileName(e, block_number, block_index) {
            e.target.name = `shop_startpopupnotifications[block_settings_${block_number}_modal_background_image_file]`;
  
            const inputText = document.querySelector(`#block_${block_number}_input_text`);
            inputText.name = '';
            inputText.value = '';
        },
        delValue(e) {            
            function findInput(elems) {
                elems.forEach((elem) => {
                    if (elem.tagName && /input/i.test(elem.tagName)) {
                        const input = elem;
                        input.value = '';
                        
                        return true;
                    } else {
                        findInput(elem.childNodes);
                    }
                })
            }
            findInput(e.target.parentElement.childNodes);
        },
        checkHexFormat(e) {
            const input = e.target;
            const inputBlockChilds = input.parentElement.parentElement.children;
            const buttonSubmit = document.querySelector('.buttom-sumbit');
            const hexRegexp = /^#([\da-f]{3}){1,2}$/i;

            let hintError;
    
            for (let i = 0; i < inputBlockChilds.length; i++) {
                const elem = inputBlockChilds[i];
  
                if (elem.className && elem.className.match(/hint-error/gi)) {
                    hintError = elem;
                }
            }

            if (!hexRegexp.test(e.target.value) && e.target.value != '') {
                hintError.style.display = 'block';
                buttonSubmit.disabled = true;
            } else {
                hintError.style.display = '';
                buttonSubmit.disabled = false;
            }
        },
        delTimer(e, block_index) {
            this.group_settings[block_index].timer_date = '';
            this.group_settings[block_index].timer_time = '';
        },
        delDate(e, block_index) {
            this.group_settings[block_index].show_date_start = '';
            this.group_settings[block_index].show_date_end = '';
        },
        delHours(e, block_index) {
            this.group_settings[block_index].show_hours_start = '';
            this.group_settings[block_index].show_hours_end = '';
        },
        pageReload() {
            setTimeout(function () {
                window.location.reload();
            }, 1000)
        },
        setValueInInputHidden(e) {
            let inputHidden = e.target.parentElement.children[0];

            if (e.target.checked === true) {
                inputHidden.value = true;
            } else {
                inputHidden.value = false;
            }
        },
    },
    created: function () {
        let numberBlock = 0;
        for (let i = 0; i < this.count_settings_block; i++) {
            numberBlock++;
            this.group_settings.push({
                main_settings_block: false,
                text_content_block: false,
                media_content_block: false,
                buttons_block: false,
                socialnetworks_block: false,
                form_block: false,
                color_scheme: false,
                display_conditions: false,
                popup_id: document.querySelector(`#block_${numberBlock}_popup_id`).value,
                type: document.querySelector(`#block_${numberBlock}_type`).value,
                position: document.querySelector(`#block_${numberBlock}_position`).value,
                animation: document.querySelector(`#block_${numberBlock}_animation`).value,
                remove_padding: document.querySelector(`#block_${numberBlock}_remove_padding`).value,
                round_corners: document.querySelector(`#block_${numberBlock}_round_corners`).value,
                width: document.querySelector(`#block_${numberBlock}_width`).value,
                height: document.querySelector(`#block_${numberBlock}_height`).value,
                offset_right: document.querySelector(`#block_${numberBlock}_offset_right`).value,
                title: document.querySelector(`#block_${numberBlock}_title`).value,
                text: document.querySelector(`#block_${numberBlock}_text`).value,
                about_action: document.querySelector(`#block_${numberBlock}_about_action`).value,
                text_close: document.querySelector(`#block_${numberBlock}_text_close`).value,

                html: document.querySelector(`#block_${numberBlock}_html`).value,
                timer_date: document.querySelector(`#block_${numberBlock}_timer_date`).value,
                timer_time: document.querySelector(`#block_${numberBlock}_timer_time`).value,

                image_path_file: document.querySelector(`#block_${numberBlock}_image_path_file`).value,

                video_iframe: document.querySelector(`#block_${numberBlock}_video_iframe`).value,
                button_text_1: document.querySelector(`#block_${numberBlock}_button_text_1`).value,
                button_link_1: document.querySelector(`#block_${numberBlock}_button_link_1`).value,
                button_class_1: document.querySelector(`#block_${numberBlock}_button_class_1`).value,
                button_text_2: document.querySelector(`#block_${numberBlock}_button_text_2`).value,
                button_link_2: document.querySelector(`#block_${numberBlock}_button_link_2`).value,
                button_class_2: document.querySelector(`#block_${numberBlock}_button_class_2`).value,
                vk_id_group: document.querySelector(`#block_${numberBlock}_vk_id_group`).value,
                od_id_group: document.querySelector(`#block_${numberBlock}_od_id_group`).value,
                facebook_src: document.querySelector(`#block_${numberBlock}_facebook_src`).value,
                share_social: document.querySelector(`#block_${numberBlock}_share_social`).value,

                settings_form_name_show: document.querySelector(`#block_${numberBlock}_settings_form_name_show`).value,
                settings_form_tel_show: document.querySelector(`#block_${numberBlock}_settings_form_tel_show`).value,
                settings_form_email_show: document.querySelector(`#block_${numberBlock}_settings_form_email_show`).value,
                settings_form_textarea_show: document.querySelector(`#block_${numberBlock}_settings_form_textarea_show`).value,
                settings_form_time_show: document.querySelector(`#block_${numberBlock}_settings_form_time_show`).value,

                settings_form_name_required: document.querySelector(`#block_${numberBlock}_settings_form_name_required`).value,
                settings_form_tel_required: document.querySelector(`#block_${numberBlock}_settings_form_tel_required`).value,
                settings_form_email_required: document.querySelector(`#block_${numberBlock}_settings_form_email_required`).value,
                settings_form_textarea_required: document.querySelector(`#block_${numberBlock}_settings_form_textarea_required`).value,
                settings_form_time_required: document.querySelector(`#block_${numberBlock}_settings_form_time_required`).value,

                settings_form_response: document.querySelector(`#block_${numberBlock}_settings_form_response`).value,
                privacy_link: document.querySelector(`#block_${numberBlock}_privacy_link`).value,

                basic_color: document.querySelector(`#block_${numberBlock}_basic_color`).value,
                add_color: document.querySelector(`#block_${numberBlock}_add_color`).value,
                accent_color: document.querySelector(`#block_${numberBlock}_accent_color`).value,
                popup_background_color: document.querySelector(`#block_${numberBlock}_popup_background_color`).value,
                popup_background_opacity: document.querySelector(`#block_${numberBlock}_popup_background_opacity`).value,
                modal_background_color: document.querySelector(`#block_${numberBlock}_modal_background_color`).value,

                modal_background_image_file: document.querySelector(`#block_${numberBlock}_modal_background_image_file`).value,

                form_filed_text_color: document.querySelector(`#block_${numberBlock}_form_filed_text_color`).value,
                form_filed_background_color: document.querySelector(`#block_${numberBlock}_form_filed_background_color`).value,
                border_color: document.querySelector(`#block_${numberBlock}_border_color`).value,

                click: document.querySelector(`#block_${numberBlock}_click`).value,
                anchor: document.querySelector(`#block_${numberBlock}_anchor`).value,
                count_display: document.querySelector(`#block_${numberBlock}_count_display`).value,
                seconds_show: document.querySelector(`#block_${numberBlock}_seconds_show`).value,
                show_specific_page: document.querySelector(`#block_${numberBlock}_show_specific_page`).value,
                conditions_show_before_closing: document.querySelector(`#block_${numberBlock}_conditions_show_before_closing`).value,
                show_date_start: document.querySelector(`#block_${numberBlock}_show_date_start`).value,
                show_date_end: document.querySelector(`#block_${numberBlock}_show_date_end`).value,
                show_days: document.querySelector(`#block_${numberBlock}_show_days`).value,
                show_hours_start: document.querySelector(`#block_${numberBlock}_show_hours_start`).value,
                show_hours_end: document.querySelector(`#block_${numberBlock}_show_hours_end`).value,
                show_procent_load: document.querySelector(`#block_${numberBlock}_show_procent_load`).value,
                page_view_count: document.querySelector(`#block_${numberBlock}_page_view_count`).value,
                re_screening: document.querySelector(`#block_${numberBlock}_re_screening`).value,
                conditions_show_only_mobile: document.querySelector(`#block_${numberBlock}_conditions_show_only_mobile`).value,
                show_again_popup: document.querySelector(`#block_${numberBlock}_show_again_popup`).value,
            })
        }
    }
})