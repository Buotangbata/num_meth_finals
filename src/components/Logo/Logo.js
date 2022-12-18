// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();
    
    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="150px" height="50px" viewBox="0 0 211.000000 53.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,53.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2090 265 c0 -170 4 -265 10 -265 6 0 10 95 10 265 0 170 -4 265 -10
265 -6 0 -10 -95 -10 -265z"/>
<path d="M685 452 c-179 -86 -159 -339 31 -392 171 -48 320 144 233 300 -51
93 -173 135 -264 92z m102 -23 c107 -40 169 -203 110 -290 -85 -126 -283 -13
-282 161 1 106 78 165 172 129z"/>
<path d="M1060 461 l-35 -6 0 -198 0 -197 131 0 132 0 4 30 c5 34 1 37 -18 13
-10 -14 -31 -19 -99 -22 l-87 -3 3 196 c2 108 4 195 4 195 0 -1 -16 -5 -35 -8z"/>
<path d="M1345 263 l0 -203 35 0 35 0 0 199 0 199 -35 4 -35 3 0 -202z"/>
<path d="M1470 463 c0 -2 20 -29 43 -60 24 -32 60 -80 79 -108 l36 -49 -79
-93 c-73 -85 -78 -93 -54 -93 14 0 25 4 25 9 0 4 26 43 59 84 l58 76 59 -84
58 -85 45 0 45 0 -31 33 c-16 17 -54 66 -83 108 l-52 77 72 85 c39 47 77 88
83 90 20 7 3 17 -19 11 -11 -3 -47 -41 -80 -84 -32 -44 -62 -79 -66 -80 -5 0
-32 36 -60 79 -51 76 -55 79 -95 83 -24 2 -43 2 -43 1z"/>
<path d="M231 423 c5 -21 9 -94 9 -163 0 -69 -4 -142 -9 -162 l-9 -38 42 0 41
0 -3 55 c-5 73 10 94 98 141 79 41 110 73 110 115 0 73 -33 89 -178 89 l-110
0 9 -37z m189 2 c24 -13 30 -22 30 -50 0 -28 -7 -40 -41 -67 -23 -18 -58 -47
-78 -64 l-36 -32 0 114 0 114 48 0 c26 0 61 -7 77 -15z"/>
</g>
</svg>

        </>
    );
};

export default Logo;
