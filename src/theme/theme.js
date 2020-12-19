import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    "palette": {
        "type": "light",
        "background": {
            "default": "#fafafa",
            "paper": "#fff"
        },
        "divider": "rgba(0, 0, 0, 0.12)",
        "text": {
            "primary": "#000660",
            "secondary": "#737373",
            "disabled": "rgba(0, 0, 0, 0.38)"
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.04)",
            "selected": "rgba(0, 0, 0, 0.08)",
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)"
        },
        "primary": {
            "main": "#1543FF",
            "dark": "#000660",
            "light": "#5BC7E4"
        },
        "secondary": {
            "main": "#000660"
        },
        "info": {
            "main": "#FFFFFF"
        },
        "warning": {
            "main": "#1543FF",
            "light": "#5BC7E4",
            "dark": "#000660",
            "contrastText": "rgba(255, 255, 255, 0.87)"
        },
    },
    "typography": {
        "button": {
            "textTransform": "none"
        }
    }
});

export default theme;

