function getAllOptionConfigs() {
            // Note: labelText is not part of this config object, it's passed directly to createThemeOptionRow.
            // This function is primarily for mapping storageKey, cssVariable, defaultValue, inputType, etc.
            // The spelling change from "Color" to "Colour" happens in the createThemeOptionRow calls.
            return [
                { storageKey: 'guiTextColor', cssVariable: '--otk-gui-text-color', defaultValue: '#e6e6e6', inputType: 'color', idSuffix: 'gui-text' },
                { storageKey: 'guiBgColor', cssVariable: '--otk-gui-bg-color', defaultValue: '#181818', inputType: 'color', idSuffix: 'gui-bg' },
                { storageKey: 'titleTextColor', cssVariable: '--otk-title-text-color', defaultValue: '#ff8040', inputType: 'color', idSuffix: 'title-text' },
                { storageKey: 'guiThreadListTitleColor', cssVariable: '--otk-gui-threadlist-title-color', defaultValue: '#e0e0e0', inputType: 'color', idSuffix: 'threadlist-title' },
                { storageKey: 'guiThreadListTimeColor', cssVariable: '--otk-gui-threadlist-time-color', defaultValue: '#FFD700', inputType: 'color', idSuffix: 'threadlist-time' },
                { storageKey: 'actualStatsTextColor', cssVariable: '--otk-stats-text-color', defaultValue: '#ff8040', inputType: 'color', idSuffix: 'actual-stats-text' },
                { storageKey: 'statsDashColor', cssVariable: '--otk-stats-dash-color', defaultValue: '#e6e6e6', inputType: 'color', idSuffix: 'stats-dash' },
                { storageKey: 'backgroundUpdatesStatsTextColor', cssVariable: '--otk-background-updates-stats-text-color', defaultValue: '#FFD700', inputType: 'color', idSuffix: 'background-updates-stats-text' },
                { storageKey: 'viewerBgColor', cssVariable: '--otk-viewer-bg-color', defaultValue: '#ffd1a4', inputType: 'color', idSuffix: 'viewer-bg' },
                { storageKey: 'guiBottomBorderColor', cssVariable: '--otk-gui-bottom-border-color', defaultValue: '#ff8040', inputType: 'color', idSuffix: 'gui-bottom-border' },
                // Messages (Odds) - Corresponds to Depth 0, 2, 4...
                { storageKey: 'msgDepthOddContentFontSize', cssVariable: '--otk-msg-depth-odd-content-font-size', defaultValue: '16px', inputType: 'number', unit: 'px', min: 8, max: 24, idSuffix: 'msg-depth-odd-content-fontsize'},
                { storageKey: 'msgDepthOddBgColor', cssVariable: '--otk-msg-depth-odd-bg-color', defaultValue: '#ffffff', inputType: 'color', idSuffix: 'msg-depth-odd-bg' },
                { storageKey: 'msgDepthOddTextColor', cssVariable: '--otk-msg-depth-odd-text-color', defaultValue: '#333333', inputType: 'color', idSuffix: 'msg-depth-odd-text' },
                { storageKey: 'msgDepthOddHeaderTextColor', cssVariable: '--otk-msg-depth-odd-header-text-color', defaultValue: '#555555', inputType: 'color', idSuffix: 'msg-depth-odd-header-text' },
                { storageKey: 'viewerHeaderBorderColorOdd', cssVariable: '--otk-viewer-header-border-color-odd', defaultValue: '#000000', inputType: 'color', idSuffix: 'viewer-header-border-odd' },
                // Messages (Evens) - Corresponds to Depth 1, 3, 5...
                { storageKey: 'msgDepthEvenContentFontSize', cssVariable: '--otk-msg-depth-even-content-font-size', defaultValue: '16px', inputType: 'number', unit: 'px', min: 8, max: 24, idSuffix: 'msg-depth-even-content-fontsize'},
                { storageKey: 'msgDepthEvenBgColor', cssVariable: '--otk-msg-depth-even-bg-color', defaultValue: '#d9d9d9', inputType: 'color', idSuffix: 'msg-depth-even-bg' },
                { storageKey: 'msgDepthEvenTextColor', cssVariable: '--otk-msg-depth-even-text-color', defaultValue: '#333333', inputType: 'color', idSuffix: 'msg-depth-even-text' },
                { storageKey: 'msgDepthEvenHeaderTextColor', cssVariable: '--otk-msg-depth-even-header-text-color', defaultValue: '#555555', inputType: 'color', idSuffix: 'msg-depth-even-header-text' },
                { storageKey: 'ownMsgBgColorOdd', cssVariable: '--otk-own-msg-bg-color-odd', defaultValue: '#d1e7ff', inputType: 'color', idSuffix: 'own-msg-bg-odd' },
                { storageKey: 'ownMsgBgColorEven', cssVariable: '--otk-own-msg-bg-color-even', defaultValue: '#c1d7ef', inputType: 'color', idSuffix: 'own-msg-bg-even' },
                { storageKey: 'cogIconColor', cssVariable: '--otk-cog-icon-color', defaultValue: '#FFD700', inputType: 'color', idSuffix: 'cog-icon' },
                { storageKey: 'disableBgFontColor', cssVariable: '--otk-disable-bg-font-color', defaultValue: '#ff8040', inputType: 'color', idSuffix: 'disable-bg-font' },
                { storageKey: 'countdownBgColor', cssVariable: '--otk-countdown-bg-color', defaultValue: '#181818', inputType: 'color', idSuffix: 'countdown-bg' },
                { storageKey: 'countdownLabelTextColor', cssVariable: '--otk-countdown-label-text-color', defaultValue: '#ff8040', inputType: 'color', idSuffix: 'countdown-label-text' },
                { storageKey: 'countdownTimerTextColor', cssVariable: '--otk-countdown-timer-text-color', defaultValue: '#ff8040', inputType: 'color', idSuffix: 'countdown-timer-text' },
                { storageKey: 'separatorColor', cssVariable: '--otk-separator-color', defaultValue: '#e6e6e6', inputType: 'color', idSuffix: 'separator' },
                { storageKey: 'optionsTextColor', cssVariable: '--otk-options-text-color', defaultValue: '#e6e6e6', inputType: 'color', idSuffix: 'options-text' },
                { storageKey: 'newMessagesDividerColor', cssVariable: '--otk-new-messages-divider-color', defaultValue: '#000000', inputType: 'color', idSuffix: 'new-msg-divider' },
                { storageKey: 'newMessagesFontColor', cssVariable: '--otk-new-messages-font-color', defaultValue: '#000000', inputType: 'color', idSuffix: 'new-msg-font' },
                { storageKey: 'newMessagesFontSize', cssVariable: '--otk-new-messages-font-size', defaultValue: '16px', inputType: 'number', unit: 'px', min: 8, max: 24, idSuffix: 'new-msg-font-size', requiresRerender: false },
                { storageKey: 'blockedContentFontColor', cssVariable: '--otk-blocked-content-font-color', defaultValue: '#e6e6e6', inputType: 'color', idSuffix: 'blocked-content-font' },

                // Pin Highlight Colors
                { storageKey: 'pinHighlightBgColor', cssVariable: '--otk-pin-highlight-bg-color', defaultValue: '#ffd1a4', inputType: 'color', idSuffix: 'pin-bg' },
                { storageKey: 'pinHighlightBorderColor', cssVariable: '--otk-pin-highlight-border-color', defaultValue: '#000000', inputType: 'color', idSuffix: 'pin-border' },

                // '+' Icon Background
                { storageKey: 'plusIconBgColor', cssVariable: '--otk-plus-icon-bg-color', defaultValue: '#d9d9d9', inputType: 'color', idSuffix: 'plus-icon-bg-color' },
                { storageKey: 'plusIconColor', cssVariable: '--otk-plus-icon-color', defaultValue: '#000000', inputType: 'color', idSuffix: 'plus-icon-color' },

                // GUI Button Colours
                { storageKey: 'guiButtonBgColor', cssVariable: '--otk-button-bg-color', defaultValue: '#555555', inputType: 'color', idSuffix: 'gui-button-bg' },
                { storageKey: 'guiButtonTextColor', cssVariable: '--otk-button-text-color', defaultValue: '#ffffff', inputType: 'color', idSuffix: 'gui-button-text' },
                { storageKey: 'guiButtonBorderColor', cssVariable: '--otk-button-border-color', defaultValue: '#777777', inputType: 'color', idSuffix: 'gui-button-border' },
                { storageKey: 'guiButtonHoverBgColor', cssVariable: '--otk-button-hover-bg-color', defaultValue: '#666666', inputType: 'color', idSuffix: 'gui-button-hover-bg' },
                { storageKey: 'guiButtonActiveBgColor', cssVariable: '--otk-button-active-bg-color', defaultValue: '#444444', inputType: 'color', idSuffix: 'gui-button-active-bg' },

                // Loading Screen Colours
                { storageKey: 'loadingOverlayBaseHexColor', cssVariable: '--otk-loading-overlay-base-hex-color', defaultValue: '#000000', inputType: 'color', idSuffix: 'loading-overlay-base-hex' },
                { storageKey: 'loadingOverlayOpacity', cssVariable: '--otk-loading-overlay-opacity', defaultValue: '1', inputType: 'number', unit: null, min:0.0, max:1.0, step:0.05, idSuffix: 'loading-overlay-opacity' },
                { storageKey: 'loadingTextColor', cssVariable: '--otk-loading-text-color', defaultValue: '#ffffff', inputType: 'color', idSuffix: 'loading-text' },
                { storageKey: 'loadingProgressBarBgColor', cssVariable: '--otk-loading-progress-bar-bg-color', defaultValue: '#333333', inputType: 'color', idSuffix: 'loading-progress-bg' },
                { storageKey: 'loadingProgressBarFillColor', cssVariable: '--otk-loading-progress-bar-fill-color', defaultValue: '#4CAF50', inputType: 'color', idSuffix: 'loading-progress-fill' },
                { storageKey: 'loadingProgressBarTextColor', cssVariable: '--otk-loading-progress-bar-text-color', defaultValue: '#ffffff', inputType: 'color', idSuffix: 'loading-progress-text' },

                // Clock Colours
                { storageKey: 'clockBgColor', cssVariable: '--otk-clock-bg-color', defaultValue: '#181818', inputType: 'color', idSuffix: 'clock-bg' },
                { storageKey: 'clockTextColor', cssVariable: '--otk-clock-text-color', defaultValue: '#e6e6e6', inputType: 'color', idSuffix: 'clock-text' },
                { storageKey: 'clockBorderColor', cssVariable: '--otk-clock-border-color', defaultValue: '#181818', inputType: 'color', idSuffix: 'clock-border' },
                { storageKey: 'clockSearchBgColor', cssVariable: '--otk-clock-search-bg-color', defaultValue: '#333', inputType: 'color', idSuffix: 'clock-search-bg' },
                { storageKey: 'clockSearchTextColor', cssVariable: '--otk-clock-search-text-color', defaultValue: '#e6e6e6', inputType: 'color', idSuffix: 'clock-search-text' },

                // QR Theming
                { storageKey: 'qrBgColor', cssVariable: '--otk-qr-bg-color', defaultValue: '#333333', inputType: 'color', idSuffix: 'qr-bg' },
                { storageKey: 'qrBorderColor', cssVariable: '--otk-qr-border-color', defaultValue: '#555555', inputType: 'color', idSuffix: 'qr-border' },
                { storageKey: 'qrHeaderBgColor', cssVariable: '--otk-qr-header-bg-color', defaultValue: '#444444', inputType: 'color', idSuffix: 'qr-header-bg' },
                { storageKey: 'qrHeaderTextColor', cssVariable: '--otk-qr-header-text-color', defaultValue: '#ffffff', inputType: 'color', idSuffix: 'qr-header-text' },
                { storageKey: 'qrTextareaBgColor', cssVariable: '--otk-qr-textarea-bg-color', defaultValue: '#222222', inputType: 'color', idSuffix: 'qr-textarea-bg' },
                { storageKey: 'qrTextareaTextColor', cssVariable: '--otk-qr-textarea-text-color', defaultValue: '#eeeeee', inputType: 'color', idSuffix: 'qr-textarea-text' },

                // Message Header Icon Colors
                { storageKey: 'blockIconColorOdd', cssVariable: '--otk-block-icon-color-odd', defaultValue: '#999999', inputType: 'color', idSuffix: 'block-icon-odd' },
                { storageKey: 'blockIconColorEven', cssVariable: '--otk-block-icon-color-even', defaultValue: '#999999', inputType: 'color', idSuffix: 'block-icon-even' },
                { storageKey: 'pinIconColorOdd', cssVariable: '--otk-pin-icon-color-odd', defaultValue: '#666666', inputType: 'color', idSuffix: 'pin-icon-odd' },
                { storageKey: 'pinIconColorEven', cssVariable: '--otk-pin-icon-color-even', defaultValue: '#666666', inputType: 'color', idSuffix: 'pin-icon-even' },
                { storageKey: 'pinIconColorActive', cssVariable: '--otk-pin-icon-color-active', defaultValue: '#ffffff', inputType: 'color', idSuffix: 'pin-icon-active' },
                { storageKey: 'mediaControlsBgColorOdd', cssVariable: '--otk-media-controls-bg-color-odd', defaultValue: 'rgba(255, 255, 255, 0.8)', inputType: 'color', idSuffix: 'media-controls-bg-odd' },
                { storageKey: 'mediaControlsBgColorEven', cssVariable: '--otk-media-controls-bg-color-even', defaultValue: 'rgba(217, 217, 217, 0.8)', inputType: 'color', idSuffix: 'media-controls-bg-even' },
                { storageKey: 'mediaMenuIconColor', cssVariable: '--otk-media-menu-icon-color', defaultValue: '#ff8040', inputType: 'color', idSuffix: 'media-menu-icon' },
                { storageKey: 'optionsMainBgColor', cssVariable: '--otk-options-main-bg-color', defaultValue: '#2c2c2c', inputType: 'color', idSuffix: 'options-main-bg' },
                { storageKey: 'optionsAltBgColor', cssVariable: '--otk-options-alt-bg-color', defaultValue: '#383838', inputType: 'color', idSuffix: 'options-alt-bg' },
                { storageKey: 'scrollTopBottomIconColor', cssVariable: '--otk-scroll-top-bottom-icon-color', defaultValue: '#FFFFFF', inputType: 'color', idSuffix: 'scroll-top-bottom-icon' }
            ];
