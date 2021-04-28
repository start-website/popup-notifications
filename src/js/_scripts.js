class StartPopupNotifications {
    constructor(props) {
        this.inputCSRF = props.inputCSRF;
        this.popup = document.querySelector(props.selector);
        this.popupId = props.popupId;
        this.validParams = {
            countDisplay: true,
            showDay: true,
            showHour: true,
            showDate: true,
            dayReScreening: true,
            showOnDesktop: true,
            showOnMobile: true,
            showMore: true,
            showThisPage: true,
            pageViewCount: true,
        };
        this.type = props.type;
        this.position = props.position;
        this.animation = props.animation;
        this.mediaWithOutPadding = props.mediaWithOutPadding;
        this.imagePath = props.imagePath;
        this.videoIframe = props.videoIframe;
        this.body = document.querySelector('body');
        this.head = document.querySelector('head');
        this.colorTheme = props.colorTheme;
        this.roundEdges = props.roundEdges;
        this.title = props.title;
        this.text = props.text;
        this.buttonText1 = props.buttonText1;
        this.buttonLink1 = props.buttonLink1;
        this.buttonClass1 = props.buttonClass1;
        this.buttonText2 = props.buttonText2;
        this.buttonLink2 = props.buttonLink2;
        this.buttonClass2 = props.buttonClass2;
        this.aboutActionTitle = props.aboutActionTitle;
        this.aboutAction = props.aboutAction;
        this.vkIdGroup = props.vkIdGroup;
        this.facebookSrc = props.facebookSrc;
        this.odIdGroup = props.odIdGroup;
        this.settingsForm = props.settingsForm;
        this.privacyPolicyLink = props.privacyPolicyLink;
        this.shareSocial = props.shareSocial;
        this.html = props.html;
        this.width = Number(props.width);
        this.height = Number(props.height);
        this.offsetRight = Number(props.offsetRight);
        this.textClose = props.textClose;
        this.supportIE10 = this._checkIE10();
        this.timer = props.timer;
        this.conditions = props.conditions;
        this.tagVideo = '';
        this.tagVideoPreloader = '';

        this.active();
    }

    createPopup() {
        if (this.type) this.popup.setAttribute('data-type', this.type);
        if (this.animation) this.popup.setAttribute('data-animation', this.animation);

        // Popup BG
        let tagPopupBg = document.createElement('div');
        tagPopupBg.className = 'startwebsite-popup__bg';
        if (this.colorTheme.popupBackgroundColor) tagPopupBg.style.backgroundColor = this.colorTheme.popupBackgroundColor;
        if (this.colorTheme.popupBackgroundOpacity) tagPopupBg.style.opacity = this.colorTheme.popupBackgroundOpacity;
        this.popup.appendChild(tagPopupBg);

        // Modal
        let tagModal = document.createElement('div');
        tagModal.className = 'startwebsite-popup__modal';
        if (this.colorTheme.modalBackgroundColor) tagModal.style.backgroundColor = this.colorTheme.modalBackgroundColor;
        if (this.colorTheme.modalBackgroundImage) tagModal.style.background = `url('${this.colorTheme.modalBackgroundImage}') no-repeat center/cover`;
        if (this.position) tagModal.setAttribute('data-position', this.position);
        if (this.roundEdges) tagModal.style.borderRadius = '4px';
        if (this.width) tagModal.style.maxWidth = this.width + 'px';
        if (this.height && this.type.match(/^(image|video)$/)) {
            const heightInPercentages = Math.ceil(this.height / 700 * 100);
            let modalHeightInPercentages = document.documentElement.clientWidth * (heightInPercentages / 100);
            if (modalHeightInPercentages > this.height) modalHeightInPercentages = this.height;
            tagModal.style.height = `${modalHeightInPercentages}px`;

            window.addEventListener('resize', () => {
                const heightInPercentages = Math.ceil(this.height / 700 * 100);
                let modalHeightInPercentages = document.documentElement.clientWidth * (heightInPercentages / 100);
                if (modalHeightInPercentages > this.height) modalHeightInPercentages = this.height;
                tagModal.style.height = `${modalHeightInPercentages}px`;
            })
        }
        if (this.height && this.type.match(/^(action-media-(left|right|top)|action-text|action-text-2|form-bottom|social-vk|social-od|social-fc|form-right|form-left|share-social|html)$/)) tagModal.style.height = this.height + 'px';
        this.popup.appendChild(tagModal);

        // Header modal
        let tagHeader = document.createElement('div');
        tagHeader.className = 'startwebsite-popup__header';
        if (this.colorTheme.basicColor) tagHeader.style.color = this.colorTheme.basicColor;
        tagModal.appendChild(tagHeader);

        // Header modal title
        if (this.title && this.type === 'action-text-2') {
            let tagTitle = document.createElement('div');
            tagTitle.className = 'startwebsite-popup__title';
            tagHeader.appendChild(tagTitle);

            let tagTitleText = document.createElement('div');
            tagTitleText.className = 'startwebsite-popup__title_text';
            tagTitleText.innerHTML = 'Title popup';
            tagTitle.appendChild(tagTitleText);
        }

        // Modal close
        let tagClose = document.createElement('div');
        tagClose.className = 'startwebsite-popup__close';
        tagHeader.appendChild(tagClose);

        let tagCloseIcon = document.createElement('span');
        tagCloseIcon.className = 'startwebsite-popup__close_icon';
        if (this.colorTheme.accentColor) tagCloseIcon.style.color = this.colorTheme.accentColor;
        tagClose.appendChild(tagCloseIcon);

        // Modal Content
        let tagContent = document.createElement('div');
        tagContent.className = 'startwebsite-popup__content';
        if (this.timer) tagContent.setAttribute('data-timer', true);
        tagModal.appendChild(tagContent);

        // Heading for form
        if (this.title || this.text) {
            if (this.type.match(/^(form-right|form-left)$/)) {
                let tagFormHeading = document.createElement('div');
                tagFormHeading.className = 'startwebsite-popup__form-heading';
                tagContent.appendChild(tagFormHeading);

                // Title for form
                if (this.title) {
                    let tagFormTitle = document.createElement('div');
                    tagFormTitle.className = 'startwebsite-popup__form-title';
                    tagFormHeading.appendChild(tagFormTitle);

                    let tagFormTitleContent = document.createElement('div');
                    tagFormTitleContent.className = 'startwebsite-popup__form-title_content';
                    if (this.colorTheme.basicColor) tagFormTitleContent.style.color = this.colorTheme.basicColor;
                    tagFormTitleContent.innerHTML = this.title;
                    tagFormTitle.appendChild(tagFormTitleContent);
                }

                // Desc for form
                if (this.text) {
                    let tagFormText = document.createElement('div');
                    tagFormText.className = 'startwebsite-popup__form-text';
                    tagFormHeading.appendChild(tagFormText);

                    let tagFormTextContent = document.createElement('div');
                    tagFormTextContent.className = 'startwebsite-popup__form-text_content';
                    if (this.colorTheme.addColor) tagFormTextContent.style.color = this.colorTheme.addColor;
                    tagFormTextContent.innerHTML = this.text;
                    tagFormText.appendChild(tagFormTextContent);
                }
            }

        }

        // Timer for form when more width 850px
        if (this.timer && this.type.match(/^(form-right|form-left)$/)) {
            this._createTimer(tagContent, 'startwebsite-popup__form-timer');
        }

        // Media
        let tagMedia;
        if (this.type.match(/^(image|video|action-media-(left|right|top)|social-(vk|od|fc)|social-networks|form-bottom|form-right|form-left)$/)) {
            tagMedia = document.createElement('div');
            tagMedia.className = 'startwebsite-popup__media';
            if (this.mediaWithOutPadding) tagMedia.className += ' with-out-padding'
            if (this.offsetRight && this.type.match(/^(action-media-(left|right)|form-right|form-left)$/)) tagMedia.style.width = this.offsetRight + '%';

            // Смена мест info и media
            if (!this.type.match(/^(action-media-right|social-(vk|od|fc)|social-networks|form-left)$/)) {
                tagContent.appendChild(tagMedia);
            }

            // Video
            if (this.videoIframe && this.type.match(/^(video|action-media-(left|right|top)|form-bottom|form-right|form-left)$/)) {
                this.imagePath = false;

                let tagVideo = document.createElement('div');
                tagVideo.className = 'startwebsite-popup__media_video';
                if (this.type !== 'video') tagVideo.innerHTML = this.videoIframe;
                tagMedia.appendChild(tagVideo);

                let tadMediaPreloader = document.createElement('div');
                tadMediaPreloader.className = 'startwebsite-popup__media_preloader';
                if (this.colorTheme.addColor) tadMediaPreloader.style.borderTopColor = this.colorTheme.addColor;
                tagMedia.appendChild(tadMediaPreloader);

                this.tagVideo = tagVideo;
                this.tagVideoPreloader = tadMediaPreloader;

                if (this.type === 'video') {
                    return true;
                }
            }

            // Image
            if (this.imagePath && this.type.match(/^(image|action-media-(left|right|top)|form-bottom|form-right|form-left)$/)) {
                let tagImg = document.createElement('img');
                tagImg.className = 'startwebsite-popup__media_img';
                tagImg.src = this.imagePath;
                tagMedia.appendChild(tagImg);

                if (this.type === 'image') {
                    return true;
                }
            }

            const createWidgetVk = (widthModal, heightWidget, cssId) => {
                if (document.documentElement.clientWidth < 755) widthModal = tagModal.clientWidth - 40;
                if (widthModal > 500) widthModal = 500;

                let tagWidgetScriptApi = document.createElement('script');
                tagWidgetScriptApi.type = 'text/javascript';
                tagWidgetScriptApi.src = 'https://vk.com/js/api/openapi.js?168';
                this.head.appendChild(tagWidgetScriptApi);

                setTimeout(() => {
                    let tagWidgetScript = document.createElement('script');
                    tagWidgetScript.type = 'text/javascript';
                    tagWidgetScript.innerHTML = `VK.Widgets.Group('${cssId}', {mode: 3, width: ${widthModal}}, ${this.vkIdGroup});`;
                    this.head.appendChild(tagWidgetScript);
                }, 1000);

                let tagWidgetHtml = document.createElement('div');
                tagWidgetHtml.className = 'startwebsite-popup__widget';
                tagWidgetHtml.innerHTML = `<!-- VK Widget --><div id='${cssId}'></div>`;
                tagMedia.appendChild(tagWidgetHtml);
            }

            const createWidgetFc = (widthModal, heightWidget, cssId) => {
                if (document.documentElement.clientWidth < 755) widthModal = tagModal.clientWidth - 40;
                if (widthModal > 500) widthModal = 500;

                let tagWidgetHtml = document.createElement('div');
                tagWidgetHtml.className = 'startwebsite-popup__widget';
                tagMedia.appendChild(tagWidgetHtml);

                let tagIframe = document.createElement('iframe');
                tagIframe.src = this.facebookSrc;
                tagIframe.setAttribute('width', widthModal);
                tagIframe.setAttribute('height', heightWidget);
                tagIframe.setAttribute('scrolling', 'no');
                tagIframe.setAttribute('frameborder', '0');
                tagIframe.setAttribute('allowfullscreen', 'true');
                tagIframe.setAttribute('adapt_container_width', 'true');
                tagIframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share');
                tagIframe.style.border = 'none';
                tagIframe.style.overflow = 'hidden';
                tagWidgetHtml.appendChild(tagIframe);
            }

            const createWidgetOd = (widthModal, heightWidget, cssId) => {
                if (document.documentElement.clientWidth < 755) widthModal = tagModal.clientWidth - 40;
                if (widthModal > 500) widthModal = 500;

               
                    let tagWidgetScript = document.createElement('script');
                    tagWidgetScript.type = 'text/javascript';
                    tagWidgetScript.innerHTML = `
                        !function (d, id, did, st) {
                            let js = d.createElement("script");
                            js.src = "https://connect.ok.ru/connect.js";
                            js.onload = js.onreadystatechange = function () {
                            if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                            if (!this.executed) {
                                this.executed = true;
                                setTimeout(function () {
                                OK.CONNECT.insertGroupWidget(id,did,st);
                                }, 0);
                            }
                            }};
                            d.documentElement.appendChild(js);
                        }(document, "${cssId}", ${this.odIdGroup},'{"width":${widthModal},"height":${heightWidget}}');
                        `;
                    this.head.appendChild(tagWidgetScript);
                

                let tagWidgetHtml = document.createElement('div');
                tagWidgetHtml.className = 'startwebsite-popup__widget';
                tagWidgetHtml.innerHTML = `<div id="${cssId}"></div>`;
                tagMedia.appendChild(tagWidgetHtml);
            }

            // Widget VK
            if (this.vkIdGroup && this.type === 'social-vk') {
                createWidgetVk(tagModal.clientWidth - 40, 250, 'widget-social-vk');
            }

            // Widget FC
            if (this.facebookSrc && this.type === 'social-fc') {
                createWidgetFc(tagModal.clientWidth - 40, 250, 'widget-social-fc');
            }

            // Widget OD
            if (this.odIdGroup && this.type === 'social-od') {
                createWidgetOd(tagModal.clientWidth - 40, 250, 'widget-social-od');
            }

            if (this.type === 'social-networks') {

                const widgetCount = () => {
                    let count = 0;
                    const widgetArr = [this.vkIdGroup, this.odIdGroup, this.facebookSrc];
                    for (const value of widgetArr) {
                        if (value) {
                            count++;
                        }
                    }
                    return count;
                }

                const setModalheightForSocialNetworks = () => {
                    switch (widgetCount()) {
                        case 1:
                            tagModal.style.height = '400px';
                            break;
                        case 2:
                            tagModal.style.height = '650px';
                            break;
                        case 3:
                            tagModal.style.height = '820px';
                            break;
                    }
                }

                if (document.documentElement.clientWidth < 755) {
                    setModalheightForSocialNetworks();
                }

                window.addEventListener('resize', () => {
                    if (document.documentElement.clientWidth < 755) {
                        setModalheightForSocialNetworks();
                    }
                })


                if (this.vkIdGroup) {
                    createWidgetVk(tagModal.clientWidth / widgetCount() - (60 / widgetCount()), 225, 'widget-social-networks-vk');
                }
                if (this.facebookSrc) {
                    createWidgetFc(tagModal.clientWidth / widgetCount() - (60 / widgetCount()), 225, 'widget-social-networks-fc');
                }
                if (this.odIdGroup) {
                    createWidgetOd(tagModal.clientWidth / widgetCount() - (60 / widgetCount()), 225, 'widget-social-networks-od');
                }
            }

        }

        // Info
        if (this.type.match(/^(action-media-(left|right|top)|action-text|action-text-2|social-(vk|od|fc)|social-networks|form-bottom|form-right|form-left|share-social|html)$/)) {
            let tagInfo = document.createElement('div');
            tagInfo.className = 'startwebsite-popup__info';
            if (this.offsetRight && this.type.match(/^(action-media-(left|right)|form-right|form-left)$/)) tagInfo.style.width = 100 - this.offsetRight + '%';
            // Смена мест info и media
            if (this.type.match(/^(action-media-right|social-(vk|od|fc)|social-networks|form-left)$/)) {
                if (this.type.match(/^(action-media-right|form-left)$/)) {
                    if (document.documentElement.clientWidth > 850) {
                        tagContent.appendChild(tagInfo);
                        tagContent.appendChild(tagMedia);
                    } else {
                        tagContent.appendChild(tagMedia);
                        tagContent.appendChild(tagInfo);
                    }

                    window.addEventListener('resize', () => {
                        if (document.documentElement.clientWidth < 850) {
                            tagInfo.parentNode.removeChild(tagInfo);
                            tagMedia.parentNode.removeChild(tagMedia);
                            tagContent.appendChild(tagMedia);
                            tagContent.appendChild(tagInfo);
                        } else {
                            tagInfo.parentNode.removeChild(tagInfo);
                            tagMedia.parentNode.removeChild(tagMedia);
                            tagContent.appendChild(tagInfo);
                            tagContent.appendChild(tagMedia);
                        }
                    })
                } else {
                    tagContent.appendChild(tagInfo);
                    tagContent.appendChild(tagMedia);
                }

            } else {
                tagContent.appendChild(tagInfo);
            }

            let tagInfoContent = document.createElement('div');
            tagInfoContent.className = 'startwebsite-popup__info-content';
            tagInfo.appendChild(tagInfoContent);

            if (this.title && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|social-(vk|od|fc)|social-networks|form-bottom|form-right|form-left|share-social)$/)) {
                let tagInfoTitle = document.createElement('div');
                tagInfoTitle.className = 'startwebsite-popup__info-title';
                tagInfoContent.appendChild(tagInfoTitle);

                let tagInfoTitleContent = document.createElement('div');
                tagInfoTitleContent.className = 'startwebsite-popup__info-title_content';
                if (this.colorTheme.basicColor) tagInfoTitleContent.style.color = this.colorTheme.basicColor;
                tagInfoTitleContent.innerHTML = this.title;
                tagInfoTitle.appendChild(tagInfoTitleContent);
            }

            if (this.text && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2|social-(vk|od|fc)|social-networks|form-bottom|form-right|form-left|share-social)$/)) {
                let tagInfoText = document.createElement('div');
                tagInfoText.className = 'startwebsite-popup__info-text';
                tagInfoContent.appendChild(tagInfoText);

                let tagInfoTextContent = document.createElement('div');
                tagInfoTextContent.className = 'startwebsite-popup__info-text_content';
                if (this.colorTheme.addColor) tagInfoTextContent.style.color = this.colorTheme.addColor;
                tagInfoTextContent.innerHTML = this.text;
                tagInfoText.appendChild(tagInfoTextContent);
            }

            // Timer
            if (this.timer && this.type.match(/^(action-media-(left|right|top)|action-text|action-text-2|form-bottom|form-right|form-left)$/)) {
                if (this.type.match(/^(action-media-(left|right|top)|action-text|action-text-2|form-bottom)$/)) {
                    this._createTimer(tagInfoContent);
                }
                if (this.type.match(/^(form-right|form-left)$/)) {
                    this._createTimer(tagInfoContent, 'startwebsite-popup__info-timer');
                }
            }

            let tagButtonsBox;
            if ((this.buttonText1 || this.buttonText2) && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
                tagButtonsBox = document.createElement('div');
                tagButtonsBox.className = 'startwebsite-popup__buttons-box';
                tagInfoContent.appendChild(tagButtonsBox);
            }

            if (this.buttonText1 && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
                let tagButton1 = document.createElement('a');
                tagButton1.className = this.buttonClass1 ? `startwebsite-popup__button ${this.buttonClass1}` : 'startwebsite-popup__button startwebsite-popup__button_ok';
                tagButton1.href = this.buttonLink1;
                tagButton1.innerHTML = this.buttonText1;
                if (!this.buttonText2) tagButton1.style.marginRight = 0;
                tagButtonsBox.appendChild(tagButton1);
            }

            if (this.buttonText2 && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
                let tagButton2 = document.createElement('a');
                tagButton2.className = this.buttonClass2 ? `startwebsite-popup__button ${this.buttonClass2}` : 'startwebsite-popup__button startwebsite-popup__button_cancel';
                tagButton2.href = this.buttonLink2;
                tagButton2.innerHTML = this.buttonText2;
                tagButtonsBox.appendChild(tagButton2)
            }

            // Do not show again
            if (this.conditions.showAgainPopup) {
                let tagNotShowAgain = document.createElement('div');
                tagNotShowAgain.className = 'startwebsite-popup__show-again';
                tagInfoContent.appendChild(tagNotShowAgain);

                let tagNotShowAgainInput = document.createElement('input');
                tagNotShowAgainInput.className = 'startwebsite-popup__show-again_input';
                tagNotShowAgainInput.type = 'checkbox';
                tagNotShowAgain.appendChild(tagNotShowAgainInput);

                let tagNotShowAgainText = document.createElement('div');
                tagNotShowAgainText.className = 'startwebsite-popup__show-again_text';
                tagNotShowAgainText.innerHTML = this.conditions.showAgainPopup;
                tagNotShowAgain.appendChild(tagNotShowAgainText)

                tagNotShowAgainInput.addEventListener('change', () => {
                    if (tagNotShowAgainInput.checked === true) {
                        localStorage.setItem(`popupSwsDoNotShowAgainId${this.popupId}`, true);
                    } else {
                        localStorage.removeItem(`popupSwsDoNotShowAgainId${this.popupId}`);
                    }
                })

            }

            // Text close
            if (this.textClose && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
                let tagTextClose = document.createElement('div');
                tagTextClose.className = 'startwebsite-popup__text-close';
                tagInfoContent.appendChild(tagTextClose);

                let tagTextCloseContent = document.createElement('span');
                tagTextCloseContent.className = 'startwebsite-popup__text-close_content';
                if (this.colorTheme.basicColor) tagTextCloseContent.style.color = this.colorTheme.basicColor;
                tagTextCloseContent.innerHTML = this.textClose;
                tagTextClose.appendChild(tagTextCloseContent);
            }

            // Form
            if (this.type.match(/^(form-bottom|form-right|form-left)$/)) {
                const setBoxShadow = (elem) => {
                    function hexToRGBA(h) {
                        let r = 0, g = 0, b = 0;

                        // 3 digits
                        if (h.length == 4) {
                            r = "0x" + h[1] + h[1];
                            g = "0x" + h[2] + h[2];
                            b = "0x" + h[3] + h[3];

                            // 6 digits
                        } else if (h.length == 7) {
                            r = "0x" + h[1] + h[2];
                            g = "0x" + h[3] + h[4];
                            b = "0x" + h[5] + h[6];
                        }

                        return "rgba(" + +r + "," + +g + "," + +b + ", 0.25)";
                    }
                    const rgba = hexToRGBA(this.colorTheme.formFieldBackground);
                    elem.addEventListener('focus', () => {
                        elem.style.boxShadow = `0 0 0 3px ${rgba}`;
                    });
                    elem.addEventListener('blur', () => {
                        elem.style.boxShadow = 'none';
                    });
                }

                let tagFormWrap = document.createElement('div');
                tagFormWrap.className = 'startwebsite-popup__form-wrap';
                tagInfoContent.appendChild(tagFormWrap);

                let tagForm = document.createElement('form');
                tagForm.className = 'startwebsite-popup__form';
                tagForm.method = 'POST';
                tagForm.action = '';
                tagFormWrap.appendChild(tagForm);

                if (this.inputCSRF) {
                    tagForm.innerHTML = this.inputCSRF;
                }

                if (this.settingsForm.name.show) {
                    let tagLabel = document.createElement('label');
                    if (this.colorTheme.addColor) tagLabel.style.color = this.colorTheme.addColor;
                    if (!this.supportIE10) tagLabel.innerHTML = this.settingsForm.name.name;
                    tagForm.appendChild(tagLabel);

                    let tagInput = document.createElement('input');
                    tagInput.className = 'startwebsite-popup__form_input';
                    tagInput.type = 'text';
                    tagInput.name = 'name';
                    if (this.settingsForm.name.required) tagInput.required = true;
                    if (this.colorTheme.formFieldBackground) {
                        tagInput.style.backgroundColor = this.colorTheme.formFieldBackground;
                        setBoxShadow(tagInput);
                    }
                    if (this.colorTheme.formTextColor) tagInput.style.color = this.colorTheme.formTextColor;
                    if (this.colorTheme.borderColor) tagInput.style.borderColor = this.colorTheme.borderColor;
                    if (this.supportIE10) tagInput.placeholder = this.settingsForm.name.name;

                    tagInput.addEventListener('focus', () => {
                        tagInput.style.boxShadow = this.colorTheme.formTextColor;
                    })

                    tagLabel.appendChild(tagInput);
                }

                if (this.settingsForm.tel.show) {
                    let tagLabel = document.createElement('label');
                    if (this.colorTheme.addColor) tagLabel.style.color = this.colorTheme.addColor;
                    if (!this.supportIE10) tagLabel.innerHTML = this.settingsForm.tel.name;
                    tagForm.appendChild(tagLabel);

                    let tagInput = document.createElement('input');
                    tagInput.className = 'startwebsite-popup__form_input';
                    tagInput.type = 'tel';
                    tagInput.name = 'tel';
                    if (this.settingsForm.tel.required) tagInput.required = true;
                    if (this.colorTheme.formFieldBackground) {
                        tagInput.style.backgroundColor = this.colorTheme.formFieldBackground;
                        setBoxShadow(tagInput);
                    }
                    if (this.colorTheme.formTextColor) tagInput.style.color = this.colorTheme.formTextColor;
                    if (this.colorTheme.borderColor) tagInput.style.borderColor = this.colorTheme.borderColor;
                    if (this.supportIE10) tagInput.placeholder = this.settingsForm.tel.name;
                    tagLabel.appendChild(tagInput);
                }

                if (this.settingsForm.email.show) {
                    let tagLabel = document.createElement('label');
                    if (this.colorTheme.addColor) tagLabel.style.color = this.colorTheme.addColor;
                    if (!this.supportIE10) tagLabel.innerHTML = this.settingsForm.email.name;
                    tagForm.appendChild(tagLabel);

                    let tagInput = document.createElement('input');
                    tagInput.className = 'startwebsite-popup__form_input';
                    tagInput.type = 'email';
                    tagInput.name = 'email';
                    if (this.settingsForm.email.required) tagInput.required = true;
                    if (this.colorTheme.formFieldBackground) {
                        tagInput.style.backgroundColor = this.colorTheme.formFieldBackground;
                        setBoxShadow(tagInput);
                    }
                    if (this.colorTheme.formTextColor) tagInput.style.color = this.colorTheme.formTextColor;
                    if (this.colorTheme.borderColor) tagInput.style.borderColor = this.colorTheme.borderColor;
                    if (this.supportIE10) tagInput.placeholder = this.settingsForm.email.name;
                    tagLabel.appendChild(tagInput);
                }

                if (this.settingsForm.time.show) {
                    let tagLabel = document.createElement('label');
                    if (this.colorTheme.addColor) tagLabel.style.color = this.colorTheme.addColor;
                    if (!this.supportIE10) tagLabel.innerHTML = this.settingsForm.time.name;
                    tagForm.appendChild(tagLabel);

                    let tagInput = document.createElement('select');
                    tagInput.className = 'startwebsite-popup__form_input';
                    tagInput.name = 'time';
                    tagInput.value = '12:00';
                    if (this.colorTheme.formFieldBackground) {
                        tagInput.style.backgroundColor = this.colorTheme.formFieldBackground;
                        setBoxShadow(tagInput);
                    }
                    if (this.colorTheme.formTextColor) tagInput.style.color = this.colorTheme.formTextColor;
                    if (this.colorTheme.borderColor) tagInput.style.borderColor = this.colorTheme.borderColor;
                    tagLabel.appendChild(tagInput);
                    let date;
                    for (let index = 6; index <= 23; index++) {
                        let hours = index.toString();
                        if (hours.length === 1) {
                            hours = `0${hours}`;
                        }
                        for (let j = -10; j < 50;) {
                            j += 10;
                            let minutes = j.toString();
                            if (minutes.length === 1) {
                                minutes = `0${minutes}`;
                            }
                            date = hours + ' : ' + minutes;
                            let tagOption = document.createElement('option');
                            tagOption.innerHTML = date;
                            tagInput.appendChild(tagOption);
                        }
                    }
                }

                if (this.settingsForm.textarea.show) {
                    let tagLabel = document.createElement('label');
                    if (this.colorTheme.addColor) tagLabel.style.color = this.colorTheme.addColor;
                    if (!this.supportIE10) tagLabel.innerHTML = this.settingsForm.textarea.name;
                    tagForm.appendChild(tagLabel);

                    let tagTextarea = document.createElement('textarea');
                    tagTextarea.className = 'startwebsite-popup__form_textarea';
                    tagTextarea.name = 'message';
                    if (this.settingsForm.textarea.required) tagTextarea.required = true;
                    if (this.colorTheme.formFieldBackground) {
                        tagTextarea.style.backgroundColor = this.colorTheme.formFieldBackground;
                        setBoxShadow(tagTextarea);
                    }
                    if (this.colorTheme.formTextColor) tagTextarea.style.color = this.colorTheme.formTextColor;
                    if (this.colorTheme.borderColor) tagTextarea.style.borderColor = this.colorTheme.borderColor;
                    if (this.supportIE10) tagTextarea.placeholder = this.settingsForm.textarea.name;
                    tagLabel.appendChild(tagTextarea);
                }

                let tagFormResponse = document.createElement('div');
                tagFormResponse.className = 'startwebsite-popup__form-response';
                tagFormResponse.innerHTML = this.settingsForm.response;
                if (this.colorTheme.basicColor) tagFormResponse.style.color = this.colorTheme.basicColor;
                tagFormWrap.appendChild(tagFormResponse);

                let tagFormButton = document.createElement('button');
                tagFormButton.className = this.buttonClass1 ? `startwebsite-popup__form_button ${this.buttonClass1}` : 'startwebsite-popup__form_button';
                tagFormButton.type = 'submit';
                tagFormButton.innerText = 'Submit';
                this._sendAJAXform(tagForm, tagFormButton, tagFormResponse);
                tagForm.appendChild(tagFormButton);

                if (this.privacyPolicyLink) {
                    let tagPrivacy = document.createElement('div');
                    tagPrivacy.className = 'startwebsite-popup__privacy';
                    if (this.colorTheme.addColor) tagPrivacy.style.color = this.colorTheme.addColor;
                    tagForm.appendChild(tagPrivacy);

                    let tagInputCheckbox = document.createElement('input');
                    tagInputCheckbox.type = 'checkbox';
                    tagInputCheckbox.className = 'startwebsite-popup__privacy_input';
                    tagInputCheckbox.setAttribute('checked', '');
                    tagPrivacy.appendChild(tagInputCheckbox);

                    let tagPrivacyText = document.createElement('div');
                    tagPrivacyText.className = 'startwebsite-popup__privacy_text';
                    tagPrivacyText.innerHTML = `I have read and accept the <a class="startwebsite-popup__privacy_link" href="${this.privacyPolicyLink}">Privacy Policy</a>`;
                    tagPrivacy.appendChild(tagPrivacyText);
                }
            }

            // About action
            if (this.aboutAction && this.type.match(/^(image|video|action-media-(left|right|top)|action-text|action-text-2)$/)) {
                tagModal.setAttribute('data-details', 'true');

                let tagAboutAction = document.createElement('div');
                tagAboutAction.className = 'startwebsite-popup__details';
                if (this.colorTheme.modalBackgroundColor) tagAboutAction.style.backgroundColor = this.colorTheme.modalBackgroundColor;
                if (this.colorTheme.basicColor) tagAboutAction.style.color = this.colorTheme.basicColor;
                if (this.colorTheme.borderColor) tagAboutAction.style.borderColor = this.colorTheme.borderColor;
                tagContent.appendChild(tagAboutAction);

                let tagAboutHeading = document.createElement('div');
                tagAboutHeading.className = 'startwebsite-popup__details-heading';
                tagAboutHeading.innerHTML = this.aboutActionTitle;
                tagAboutAction.appendChild(tagAboutHeading);

                let tagAboutIcon = document.createElement('div');
                tagAboutIcon.className = 'startwebsite-popup__details-icon';
                tagAboutAction.appendChild(tagAboutIcon);

                let tagAboutBody = document.createElement('div');
                tagAboutBody.className = 'startwebsite-popup__details-body';
                if (this.colorTheme.addColor) tagAboutBody.style.color = this.colorTheme.addColor;
                tagAboutBody.innerHTML = this.aboutAction;
                tagAboutAction.appendChild(tagAboutBody);

                tagAboutAction.addEventListener('click', () => {
                    if (tagAboutAction.className.match(/active/gi)) {
                        const aboutActionClassWithOutActive = tagAboutAction.className.replace(/(\s)(active(-ie9|))/gi, '');
                        tagAboutAction.className = aboutActionClassWithOutActive;
                        tagAboutAction.style.transform = '';

                    } else {
                        tagAboutAction.className += ' active';
                        tagAboutAction.style.transform = `translateY(-${tagModal.clientHeight - 50}px)`;
                        if (!this.supportIE10) {
                            tagAboutAction.className += ' active-ie9';
                        }
                    }
                })

                // Вставка тега в конец при удаление тегов info и медиа
                window.addEventListener('resize', () => {
                    tagAboutAction.parentNode.removeChild(tagAboutAction);
                    tagContent.appendChild(tagAboutAction);
                })
            }

            // Share social
            if (this.shareSocial && this.type === 'share-social') {
                let tagShareScript = document.createElement('script');
                tagShareScript.src = 'https://yastatic.net/share2/share.js';
                this.head.appendChild(tagShareScript);

                let tagShare = document.createElement('div');
                tagShare.className = 'startwebsite-popup__shares';
                tagShare.innerHTML = this.shareSocial;
                tagInfoContent.appendChild(tagShare);
            }

            // Html
            if (this.html && this.type === 'html') {
                tagInfoContent.innerHTML = this.html;
            }
        }
    }

    closePopup() {
        this.popup.addEventListener('click', (e) => {
            if (e.target.className.match(/(startwebsite-popup__bg|startwebsite-popup__text-close_content|startwebsite-popup__close_icon)/gi)) {
                const popupClassWithOutActive = this.popup.className.replace(/(\s|)active/gi, '');

                this.popup.className += ' hide';

                const popupRemoveActiveClass = () => {
                    if (this.type === 'video') {
                        this.tagVideo.innerHTML = '';
                        this.tagVideoPreloader.style.display = 'none';
                    }
                    this.popup.className = popupClassWithOutActive;
                    this.body.style.overflow = '';
                    this.body.style.marginRight = ''
                    this.popup.removeEventListener('transitionend', popupRemoveActiveClass);
                }

                this.popup.addEventListener('transitionend', popupRemoveActiveClass);

                /* fallback for older browsers */
                setTimeout(() => {
                    popupRemoveActiveClass();
                }, 1000);
            }
        });
    }

    _checkIE10() {
        if ('matchMedia' in window) {
            return true;
        } else {
            this.popup.className += ' ie9';
            return false;
        }
    }

    _createTimer(elem, addClass) {
        const distanceEndHtml = '<span class="startwebsite-popup__timer_days">' + '00' + '</span>' +
            '<span class="startwebsite-popup__timer_hours">' + '00' + '</span>' +
            '<span class="startwebsite-popup__timer_minutes">' + '00' + '</span>' +
            '<span class="startwebsite-popup__timer_seconds">' + '00';

        let tagTimer = document.createElement('div');
        tagTimer.className = addClass ? `startwebsite-popup__timer ${addClass}` : 'startwebsite-popup__timer';
        tagTimer.innerHTML = distanceEndHtml;
        if (this.colorTheme.addColor) tagTimer.style.color = this.colorTheme.addColor;
        elem.appendChild(tagTimer);

        //let countDowndate = new Date(this.timer).getTime(); 
        let countDowndate = moment(this.timer);
        let countDownFunction = setInterval(function () {
           // let now = new Date().getTime();
           let now = moment();
            let distance = countDowndate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            let htmlDays = '<span class="startwebsite-popup__timer_days">' + days + '</span>';
            let htmlHours = '<span class="startwebsite-popup__timer_hours">' + hours + '</span>';
            let htmlMinutes = '<span class="startwebsite-popup__timer_minutes">' + minutes + '</span>';
            let htmlSeconds = '<span class="startwebsite-popup__timer_seconds">' + seconds;

            if (days < 10) htmlDays = '<span class="startwebsite-popup__timer_days">' + '0' + days + '</span>';
            if (hours < 10) htmlHours = '<span class="startwebsite-popup__timer_hours">' + '0' + hours + '</span>';
            if (minutes < 10) htmlMinutes = '<span class="startwebsite-popup__timer_minutes">' + '0' + minutes + '</span>';
            if (seconds < 10) htmlSeconds = '<span class="startwebsite-popup__timer_seconds">' + '0' + seconds;

            tagTimer.innerHTML = htmlDays + htmlHours + htmlMinutes + htmlSeconds;

            if (distance < 0) {
                clearInterval(countDownFunction);
                tagTimer.innerHTML = distanceEndHtml;
            }
        }, 1000);
    }

    _sendAJAXform(form, button, response) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const url = location.href;
            let formData = new FormData(form);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.send(formData);

            xhr.onload = () => {
                if (xhr.status == 200) {
                    response.className += ' active';
                    form.className += ' form-blur';
                    setTimeout(function () {
                        form.reset();
                        form.className = 'startwebsite-popup__form';
                        response.className = 'startwebsite-popup__form-response';
                    }, 7000)
                } else {
                    console.log("Form error " + xhr.status);
                }
            }
            xhr.timeout = 30000;
        })
    }

    active() {
        if (this.popup) {
            this.createPopup();
            this.closePopup();

            const checkLocalStorageCountDisplay = () => {
                let localStorageCountDisplay = Number(localStorage.getItem(`countPopupSwsDisplayIndexOf${this.popupId}`));
                if (localStorageCountDisplay) {
                    if (this.conditions.countDisplay !== '' && localStorageCountDisplay >= Number(this.conditions.countDisplay)) {
                        this.validParams.countDisplay = false;
                        return false;
                    } else {
                        this.validParams.countDisplay = true;
                        return true;
                    }
                }
            }

            const checkDevice = () => {
                const mobileList = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;

                const mobileList2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

                function checkIsMobile(a) {
                    if (mobileList.test(a) || mobileList2.test(a.substring(0, 4))) {
                        return true;
                    }
                    return false;
                }

                const isMobile = checkIsMobile(navigator.userAgent || navigator.vendor || window.opera);

                if (!isMobile && this.conditions.showOnlyMobile) {
                    this.validParams.showOnDesktop = false;
                }
            }

            const setCountDisplay = () => {
                let localStorageCountDisplay = Number(localStorage.getItem(`countPopupSwsDisplayIndexOf${this.popupId}`));
                if (localStorageCountDisplay) {
                    localStorage.setItem(`countPopupSwsDisplayIndexOf${this.popupId}`, localStorageCountDisplay += 1)
                } else {
                    localStorage.setItem(`countPopupSwsDisplayIndexOf${this.popupId}`, 1);
                }
            }

            const setReScreeningDay = () => {
                const today = new Date();
                let localStorageReScreeningDay = Number(localStorage.getItem(`popupSwsReScreeningDayId${this.popupId}`));
                if (localStorageReScreeningDay) {
                    if (today.getDate() === localStorageReScreeningDay) {
                        this.validParams.dayReScreening = true;
                    } else {
                        this.validParams.dayReScreening = false;
                    }
                } else {
                    const dayRescreening = today.getDate() + Number(this.conditions.reScreening);
                    localStorage.setItem(`popupSwsReScreeningDayId${this.popupId}`, dayRescreening);
                }
            }

            const checkLocalStorageShowMore = () => {
                let localStorageNotShowAgain = localStorage.getItem(`popupSwsDoNotShowAgainId${this.popupId}`);
                if (localStorageNotShowAgain) {
                    this.validParams.showMore = false;
                } else {
                    this.validParams.showMore = true;
                }
            }

            const showPopup = () => {
                checkLocalStorageCountDisplay();

                if (this.conditions.showOnlyMobile) checkDevice();
                if (this.conditions.showAgainPopup) checkLocalStorageShowMore();
   
                const checkValidParams = () => {
                    for (const param in this.validParams) {
                        if (this.validParams[param] === false) {
                            return false;
                        }
                    }
                    return true;
                }

                let canActive = checkValidParams();

                if (canActive) {
                    if (this.type === 'video') {
                        this.tagVideoPreloader.style.display = '';
                        this.tagVideo.innerHTML = this.videoIframe;
                    }

                    setCountDisplay();
                    const scrollWidthSize = window.innerWidth - document.documentElement.clientWidth;

                    this.body.style.overflow = 'hidden';
                    this.body.style.marginRight = scrollWidthSize + 'px';

                    if (this.popup.className.match(/hide/gi)) {
                        const popupClassWithActive = this.popup.className.replace(/hide/gi, 'active');
                        this.popup.className = popupClassWithActive;
                    } else {
                        this.popup.className += ' active';
                    }
                }
            }

            const showPopupInSeconds = () => {
                const secondsTypeString = this.conditions.secondsShow + '000';
                const secondsTypeNumber = Number(secondsTypeString);

                setTimeout(() => {
                    showPopup();
                }, secondsTypeNumber);
            }

            if (this.conditions.click) {
                document.querySelector(this.conditions.click).addEventListener('click', () => {
                    showPopup();
                })
            }

            if (this.conditions.anchor) {
                let showDone = false;
                const anchor = document.querySelector(this.conditions.anchor);
                const windowCenterY = window.innerHeight / 2;
                const anchorOffsetY = anchor.getBoundingClientRect().top + window.pageYOffset;
                const anchorCenterOfVisibility = anchorOffsetY - windowCenterY;

                window.addEventListener('scroll', () => {
                    if (anchorCenterOfVisibility <= window.pageYOffset && anchorCenterOfVisibility + 200 >= window.pageYOffset) {
                        if (!showDone) {
                            showPopup();
                            showDone = true;
                        }
                    }
                })
            }

            if (this.conditions.showSpecificPage) {
                if (location.href !== this.conditions.showSpecificPage) {
                    this.validParams.showThisPage = false;
                }
            }

            if (this.conditions.secondsShow) {
                showPopupInSeconds();
            }

            if (this.conditions.showBeforeClosing) {
                let showDone;
                let STset = sessionStorage.getItem(`showBeforeClosingPopupIndexOf${this.popupId}`);
                window.addEventListener('mouseout', (e) => {
                    if (e.pageY <= 10 && !showDone && !STset) {
                        showPopup();
                        showDone = true;
                        sessionStorage.setItem(`showBeforeClosingPopupIndexOf${this.popupId}`, true);
                    }
                })

            }

            if (this.conditions.showDays) {
                const today = new Date();
                let showDaysArr = this.conditions.showDays.split(',');

                for (let i = 0; i < showDaysArr.length; i++) {
                    const dayShow = showDaysArr[i];
                    if (dayShow == today.getDay()) {
                        this.validParams.showDay = true;
                        break;
                    } else {
                        this.validParams.showDay = false;
                    }

                }
            }
            
            if (this.conditions.startShowHours) {
                const today = new Date();
                const startHours = this.conditions.startShowHours;
                const startHoursValid = today.getHours() - startHours > 0 ? true : false;
                if (startHoursValid) {
                    this.validParams.showHour = true;
                } else {
                    this.validParams.showHour = false;
                }

                if (this.conditions.endShowHours) {
                    const endShowHours = this.conditions.endShowHours;
                    const endShowHoursValid = (endShowHours - today.getHours()) > 0 ? true : false;
                    
                    if (endShowHoursValid) {
                        this.validParams.showHour = true;
                    } else {
                        this.validParams.showHour = false;
                    }
                }

            }

            if (this.conditions.startDate) {
                const today = new Date();
                const startDate = new Date(this.conditions.startDate);
                const startDateValid = today - startDate > 0 ? true : false;

                if (startDateValid) {
                    this.validParams.showDate = true;
                } else {
                    this.validParams.showDate = false;
                }

                if (this.conditions.endDate) {
                    const endDate = new Date(this.conditions.endDate);
                    const endDateValid = endDate - today > 0 ? true : false;

                    if (startDateValid && endDateValid) {
                        this.validParams.showDate = true;
                    } else {
                        this.validParams.showDate = false;
                    }
                }

            }

            if (this.conditions.showProcentLoad) {
                const scrollHeight = Math.max(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                );
                const sizePage = scrollHeight - window.innerHeight;
                const procentOfHeightPage = Math.floor(sizePage * (Number(this.conditions.showProcentLoad) / 100));
                const showPopupOfProcentPage = () => {
                    if (window.pageYOffset >= procentOfHeightPage) {
                        showPopup();
                        window.removeEventListener('scroll', showPopupOfProcentPage);
                    }
                }
                window.addEventListener('scroll', showPopupOfProcentPage);
            }

            if (this.conditions.pageViewCount) {
                this.validParams.pageViewCount = false;
                let viewedPages = sessionStorage.getItem(`viewedPagesPopupIndexOf${this.popupId}`);
                if (viewedPages) {
                    let visitedPagesArray = viewedPages.split(',');

                    let visitedPage = visitedPagesArray.includes(location.href);
                    if (!visitedPage) {
                        sessionStorage.setItem(`viewedPagesPopupIndexOf${this.popupId}`, `${viewedPages},${location.href}`);
                    }
                    if (visitedPagesArray.length === Number(this.conditions.pageViewCount)) {
                        sessionStorage.setItem(`viewedPagesPopupIndexOf${this.popupId}`, `${viewedPages},showFalse`);
                        this.validParams.pageViewCount = true;
                    }
                } else {
                    sessionStorage.setItem(`viewedPagesPopupIndexOf${this.popupId}`, location.href);
                }
            }

            if (this.conditions.reScreening) {
                setReScreeningDay();
                showPopupInSeconds();
            }
        }
    }
}

var startPopupNotification1 = new StartPopupNotifications({
    selector: '[data-popup-number="1"]',
    popupId: '1',
    type: 'action-media-left', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'scale-center', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    mediaWithOutPadding: '',
    imagePath: './images/2.jpg',//
    //videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HR9UXIWUqmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', //
    roundEdges: false,
    title: 'Action',//
    text: 'Place your order within 20 minutes and get <b>10% discount!</b>',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    buttonText2: 'Button 2',
    buttonLink2: '#link2',
    buttonClass2: '',
    aboutActionTitle: 'More details',
    aboutAction: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimosodio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusa',// 
    vkIdGroup: '71641093',//
    odIdGroup: '50582132228315',//
    facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812', // в url parametre width должно быть 500
    settingsForm: {
        name: {
            name: 'Name',
            required: true,
            show: true
        },
        tel: {
            name: 'Telephone',
            required: true,
            show: true
        },
        email: {
            name: 'E-mail',
            required: true,
            show: true
        },
        textarea: {
            name: 'Message',
            required: true,
            show: true
        },
        time: {
            name: 'Time',
            required: true,
            show: true
        },
        response: 'Thank You! We will contact you shortly.'
    },
    privacyPolicyLink: 'http://privacy-policy/',
    shareSocial: '<div class="ya-share2" data-curtain data-shape="round" data-color-scheme="whiteblack" data-services="messenger,vkontakte,facebook,odnoklassniki,telegram,twitter"></div>',
    html: 'sss',
    width: '600',
    height: '360', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup1',
        anchor: '#anchor',
        countDisplay: '—', // — (бесконечно)
        secondsShow: '',
        showSpecificPage: '',//http://localhost:3000/2.html
        showBeforeClosing: false,
        showDays: '0,1,2,3,4,5,6', //0,1,2,3,4,5,6
        startShowHours: '13', // 12, 11, 4
        endShowHours: '24', // 12, 3, 4, не включительно
        startDate: '2020-12-08',//2020-12-07 (не работает в IE)
        endDate: '2021-12-10', //2021-12-07  (не работает в IE), не включительно
        showProcentLoad: '',
        pageViewCount: '',
        reScreening: '', // 3
        showOnlyMobile: false,
        showAgainPopup: 'Don\'t show this notification again'
    }
});

var startPopupNotification2 = new StartPopupNotifications({
    selector: '[data-popup-number="2"]',
    popupId: '1',
    type: 'action-media-right', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'scale-center', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/2.jpg',//
    mediaWithOutPadding: false,
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    title: 'Action',//
    text: 'Place your order within 20 minutes and get <b>10% discount!</b>',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    buttonText2: 'Button 2',
    buttonLink2: '#link2',
    buttonClass2: '',
    aboutActionTitle: 'More details',
    aboutAction: 'muLorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',// 
    width: '600',
    height: '380', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '2021-12-04 23:55',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup2',
    }
});

var startPopupNotification3 = new StartPopupNotifications({
    selector: '[data-popup-number="3"]',
    popupId: '1',
    type: 'action-media-top', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'scale-center', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    mediaWithOutPadding: true,
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    title: 'Action',//
    text: 'Place your order within 20 minutes and get <b>10% discount!</b>',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    buttonText2: 'Button 2',
    buttonLink2: '#link2',
    buttonClass2: '',
    aboutActionTitle: 'More details',
    aboutAction: '',// 
    vkIdGroup: '71641093',//
    odIdGroup: '50582132228315',//
    facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812', // в url parametre width должно быть 500
    settingsForm: {
        name: {
            name: 'Name',
            required: true,
            show: true
        },
        tel: {
            name: 'Telephone',
            required: true,
            show: true
        },
        email: {
            name: 'E-mail',
            required: true,
            show: true
        },
        textarea: {
            name: 'Message',
            required: true,
            show: true
        },
        time: {
            name: 'Time',
            required: true,
            show: true
        },
        response: 'Thank You! We will contact you shortly.'
    },
    privacyPolicyLink: 'http://privacy-policy/',
    shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
    html: 'sss',
    width: '400',
    height: '580', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: 'red'
    },
    conditions: {
        click: '#popup3',
    }
});

var startPopupNotification4 = new StartPopupNotifications({
    selector: '[data-popup-number="4"]',
    popupId: '1',
    type: 'action-text', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'rotate-diag', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    title: 'Action',//
    text: 'Place your order within 20 minutes and get <b>10% discount!</b>',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    buttonText2: 'Button 2',
    buttonLink2: '#link2',
    buttonClass2: '',
    aboutActionTitle: 'More details',
    aboutAction: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimosodio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. At molestias earum eius pariatur a nihil expedita quisquam quae, culpa voluptates consequatur tempore aliquid facilis, ut dignissimos odio aspernatur fugiat accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.',// 
    width: '600',
    height: '360', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: ''
    },
    conditions: {
        click: '#popup4',
    }
});

var startPopupNotification5 = new StartPopupNotifications({
    selector: '[data-popup-number="5"]',
    popupId: '1',
    type: 'action-text-2', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'swirl-fwd', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    title: 'Action',//
    text: 'Place your order within 20 minutes and get <b>10% discount!</b>',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    buttonText2: '',
    buttonLink2: '',
    buttonClass2: '',
    aboutActionTitle: 'More details',
    aboutAction: '',// 
    vkIdGroup: '71641093',//
    odIdGroup: '50582132228315',//
    facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812', // в url parametre width должно быть 500
    settingsForm: {
        name: {
            name: 'Name',
            required: true,
            show: true
        },
        tel: {
            name: 'Telephone',
            required: true,
            show: true
        },
        email: {
            name: 'E-mail',
            required: true,
            show: true
        },
        textarea: {
            name: 'Message',
            required: true,
            show: true
        },
        time: {
            name: 'Time',
            required: true,
            show: true
        },
        response: 'Thank You! We will contact you shortly.'
    },
    privacyPolicyLink: 'http://privacy-policy/',
    shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
    html: 'sss',
    width: '600',
    height: '320', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup5',
    }
});

var startPopupNotification6 = new StartPopupNotifications({
    selector: '[data-popup-number="6"]',
    popupId: '1',
    type: 'social-vk', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'right', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'slide-right', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    title: 'Our group in vkontakte',//
    text: 'Subscribe to us!',//
    imagePath: './images/1.jpg',//
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    vkIdGroup: '22822305',//
    width: '500',
    height: '350', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup6',
    }
});

var startPopupNotification7 = new StartPopupNotifications({
    selector: '[data-popup-number="7"]',
    popupId: '1',
    type: 'social-od', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'left', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'slide-left', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    title: 'Our group in OK.RU',//
    text: 'Subscribe to us!',//
    vkIdGroup: '71641093',//
    odIdGroup: '50582132228315',//
    facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812', // в url parametre width должно быть 500
    privacyPolicyLink: 'http://privacy-policy/',
    shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
    html: 'sss',
    width: '500',
    height: '390', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup7',
    }
});

var startPopupNotification8 = new StartPopupNotifications({
    selector: '[data-popup-number="8"]',
    popupId: '1',
    type: 'social-fc', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'bottom', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'slide-bottom', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    title: 'Our group in Facebook',//
    text: 'Subscribe to us!',//
    vkIdGroup: '71641093',//
    odIdGroup: '50582132228315',//
    facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812', // в url parametre width должно быть 500
    privacyPolicyLink: 'http://privacy-policy/',
    shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
    html: 'sss',
    width: '500',
    height: '400', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup8',
    }
});

var startPopupNotification9 = new StartPopupNotifications({
    selector: '[data-popup-number="9"]',
    popupId: '1',
    type: 'social-networks', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'flicker', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    title: 'Our social networks',//
    text: 'Subscribe to us!',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    buttonText2: 'Button 2',
    buttonLink2: '#link2',
    buttonClass2: '',
    aboutActionTitle: 'More details',
    aboutAction: '',// 
    vkIdGroup: '71641093',//
    odIdGroup: '50582132228315',//
    facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812', // в url parametre width должно быть 500
    width: '600',
    height: '400', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup9',
    }
});

var startPopupNotification10 = new StartPopupNotifications({
    selector: '[data-popup-number="10"]',
    popupId: '1',
    type: 'image', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'fade', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '', //<iframe width="560" height="315" src="https://www.youtube.com/embed/kF45av-wmls" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    roundEdges: false,
    width: '600',
    height: '400', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    colorTheme: {
        basicColor: '#fff',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup10',
    }
});

var startPopupNotification11 = new StartPopupNotifications({
    selector: '[data-popup-number="11"]',
    popupId: '1',
    type: 'video', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'fade', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/au3-3BJmLAg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', //
    width: '600',
    height: '400', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#fff',
        addColor: '#000',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#fff',
        formFieldBackground: '#1C09ED',// only hex format
        borderColor: '#ccc'
    },
    conditions: {
        click: '#popup11',
    }
});

var startPopupNotification12 = new StartPopupNotifications({
    selector: '[data-popup-number="12"]',
    popupId: '1',
    type: 'form-bottom', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'scale-ver-center', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    mediaWithOutPadding: true,
    link: '#',
    imagePath: './images/1.jpg',//
    //videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HR9UXIWUqmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', //
    roundEdges: true,
    title: 'Our form',//
    text: 'Write us',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    buttonText2: 'Button 2',
    buttonLink2: '#link2',
    buttonClass2: '',
    aboutActionTitle: 'More details',
    aboutAction: '',// 
    vkIdGroup: '71641093',//
    odIdGroup: '50582132228315',//
    facebookSrc: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorld-of-Web-247563759246491%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1639956936237812', // в url parametre width должно быть 500
    settingsForm: {
        name: {
            name: 'Name',
            required: true,
            show: true
        },
        tel: {
            name: 'Telephone',
            required: true,
            show: true
        },
        email: {
            name: 'E-mail',
            required: true,
            show: true
        },
        textarea: {
            name: 'Message',
            required: true,
            show: false
        },
        time: {
            name: 'Time',
            required: true,
            show: false
        },
        response: 'Thank You! We will contact you shortly.'
    },
    privacyPolicyLink: 'http://privacy-policy/',
    shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
    html: 'sss',
    width: '450',
    height: '660', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '',
        formFieldBackground: '',// only hex format
        borderColor: ''
    },
    conditions: {
        click: '#popup12',
    }
});

var startPopupNotification13 = new StartPopupNotifications({
    selector: '[data-popup-number="13"]',
    popupId: '1',
    type: 'form-right', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'scale-center', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    mediaWithOutPadding: false,
    link: '#',
    imagePath: './images/2.jpg',//
    //videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HR9UXIWUqmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', //
    roundEdges: false,
    title: 'Our form',//
    text: 'Write us',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    buttonText2: 'Button 2',
    buttonLink2: '#link2',
    settingsForm: {
        name: {
            name: 'Name',
            required: true,
            show: true
        },
        tel: {
            name: 'Telephone',
            required: true,
            show: true
        },
        email: {
            name: 'E-mail',
            required: true,
            show: true
        },
        textarea: {
            name: 'Message',
            required: true,
            show: true
        },
        time: {
            name: 'Time',
            required: true,
            show: true
        },
        response: 'Thank You! We will contact you shortly.'
    },
    privacyPolicyLink: 'http://privacy-policy/',
    shareSocial: '<div class="ya-share2" data-curtain data-shape="round" data-color-scheme="whiteblack" data-services="messenger,vkontakte,facebook,odnoklassniki,telegram,twitter"></div>',
    html: 'sss',
    width: '850',
    height: '550', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '#000',
        formFieldBackground: '',// only hex format
        borderColor: ''
    },
    conditions: {
        click: '#popup13',
    }
});

var startPopupNotification14 = new StartPopupNotifications({
    selector: '[data-popup-number="14"]',
    popupId: '1',
    type: 'form-left', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'scale-center', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    mediaWithOutPadding: false,
    link: '#',
    imagePath: './images/2.jpg',//
    //videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HR9UXIWUqmw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    roundEdges: false,
    title: 'Our form',//
    text: 'Write us',//
    textClose: 'Close popup',
    buttonText1: 'Button',
    buttonLink1: '#link1',
    buttonClass1: 'startwebsite-popup__button_ok',
    settingsForm: {
        name: {
            name: 'Name',
            required: true,
            show: true
        },
        tel: {
            name: 'Telephone',
            required: true,
            show: true
        },
        email: {
            name: 'E-mail',
            required: true,
            show: true
        },
        textarea: {
            name: 'Message',
            required: true,
            show: true
        },
        time: {
            name: 'Time',
            required: true,
            show: true
        },
        response: 'Thank You! We will contact you shortly.'
    },
    privacyPolicyLink: 'http://privacy-policy/',
    shareSocial: '</script><div class="ya-share2" data-curtain data-size="l" data-shape="round" data-limit="4" data-services="vkontakte,facebook,odnoklassniki,messenger,telegram,twitter,viber,whatsapp"></div>',
    html: 'sss',
    width: '850',
    height: '550', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '',
        formFieldBackground: '',// only hex format
        borderColor: ''
    },
    conditions: {
        click: '#popup14',
    }
});

var startPopupNotification15 = new StartPopupNotifications({
    selector: '[data-popup-number="15"]',
    popupId: '1',
    type: 'share-social', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'left-bottom', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'slide-bottom-left', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    link: '#',
    imagePath: './images/1.jpg',//
    videoIframe: '', //
    roundEdges: false,
    title: 'Follow us',//
    text: 'Our social networks',//
    shareSocial: '<div class="ya-share2" data-curtain data-shape="round" data-color-scheme="whiteblack" data-services="messenger,vkontakte,facebook,odnoklassniki,telegram,twitter"></div>',
    html: 'sss',
    width: '380',
    height: '220', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '',
        formFieldBackground: '',// only hex format
        borderColor: ''
    },
    conditions: {
        click: '#popup15',
    }
});

var startPopupNotification16 = new StartPopupNotifications({
    selector: '[data-popup-number="16"]',
    popupId: '1',
    type: 'html', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, social-vk, social-od, social-fc, social-networks, form-bottom, form-right, form-left, share-social, html
    position: 'center', // center, left-top, right-top, left-bottom, right-bottom, top, bottom, left, right
    animation: 'fade', // fade, flicker, slide-top, slide-left-top, slide-right-top, slide-left, slide-right, slide-bottom-right, slide-bottom, slide-bottom-left, scale-center, rotate-diag, scale-ver-center, swirl-fwd
    html: 'Your html code',
    width: '550',
    height: '350', // image, video, action-media-left, action-media-right, action-media-top, action-text, action-text-2, form-bottom, form-right, form-left, html
    offsetRight: '30',
    timer: '',//2021-12-04 23:55
    colorTheme: {
        basicColor: '#000',
        addColor: '#444',
        //accentColor: 'yellow',
        popupBackgroundColor: 'black',
        popupBackgroundOpacity: '0.7',
        modalBackgroundColor: '#fff',
        modalBackgroundImage: '',//./images/4.jpg
        formTextColor: '',
        formFieldBackground: '',// only hex format
        borderColor: ''
    },
    conditions: {
        click: '#popup16',
    }
});