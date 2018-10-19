import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { indigo, pink } from 'material-ui/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757deB',
            main: '#3f51b5',
            dark: '#002984',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff79b0',
            main: '#ff4881',
            dark: '#c60055',
            contrastText: '#000'
        },
        openTitle: indigo['400'],
        protectedTitle: pink['400'],
        type: 'light'
    }
})