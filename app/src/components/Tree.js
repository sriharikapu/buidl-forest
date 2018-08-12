export default {
    name: "Tree",
    props: {
        color: String,
    },
    template: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve" height="100%" class=""><g>
    <path v-bind:style="{fill: color}" d="M485.271,240.532c0-35.798-21.77-66.511-52.792-79.623c5.478-10.59,8.592-22.602,8.592-35.348  c0-42.561-34.502-77.063-77.063-77.063c-12.126,0-23.593,2.809-33.799,7.798C321.141,23.827,291.362,0,256,0  s-65.14,23.827-74.209,56.296c-10.206-4.99-21.673-7.798-33.799-7.798c-42.561,0-77.063,34.502-77.063,77.063  c0,12.746,3.113,24.758,8.592,35.348c-31.022,13.113-52.792,43.825-52.792,79.623c0,46.393,36.576,84.196,82.459,86.265  c6.397,23.17,31.1,40.443,60.622,40.443c16.732,0,31.91-5.557,43.095-14.581c11.186,9.024,26.364,14.581,43.095,14.581  s31.91-5.557,43.095-14.581c11.186,9.024,26.364,14.581,43.095,14.581c29.522,0,54.225-17.273,60.622-40.444  C448.695,324.727,485.271,286.925,485.271,240.532z" data-original="#129B12" class="active-path" data-old_color="#129B12"/><g>
    <path v-bind:style="{fill: color}" d="M251.377,0.153c-0.949,0.057-1.894,0.125-2.833,0.217c-0.288,0.028-0.574,0.06-0.86,0.091   c-1.009,0.109-2.013,0.235-3.01,0.383c-0.187,0.027-0.374,0.054-0.56,0.083c-1.186,0.185-2.366,0.391-3.534,0.629   c-0.002,0-0.004,0.001-0.006,0.001c20.23,4.114,39.171,18.204,51.171,35.964c8.498,12.577,23.017,19.827,38.161,18.797   c0.101-0.007,0.201-0.014,0.302-0.021C321.141,23.827,291.362,0,256,0c-1.24,0-2.471,0.036-3.696,0.094   C251.994,0.109,251.687,0.135,251.377,0.153z" data-original="#097C09" class="" data-old_color="#097C09"/>
    <path v-bind:style="{fill: color}" d="M432.479,160.909c5.479-10.59,8.592-22.602,8.592-35.348c0-42.561-34.502-77.063-77.063-77.063   c-5.282,0-10.438,0.534-15.42,1.548c35.166,7.147,61.633,38.239,61.633,75.515c0,12.746-3.113,24.758-8.592,35.348   c31.022,13.113,52.792,43.825,52.792,79.623c0,46.393-36.576,84.195-82.458,86.264c-5.243,18.991-22.787,34.012-45.199,38.816   c4.933,1.059,10.1,1.627,15.427,1.627c29.522,0,54.225-17.273,60.622-40.444c45.883-2.069,82.458-39.871,82.458-86.264   C485.271,204.734,463.503,174.021,432.479,160.909z" data-original="#097C09" class="" data-old_color="#097C09"/>
</g><path v-bind:style="{fill: color}" d="M200.82,339.895c-6.95,11.788-35.752,24.969-46.433,25.718c1.175,0.252,2.366,0.472,3.567,0.668  c0.096,0.016,0.192,0.033,0.289,0.048c1.217,0.193,2.446,0.359,3.688,0.492c0.032,0.003,0.064,0.005,0.096,0.009  c1.117,0.118,2.246,0.203,3.381,0.27c0.276,0.016,0.553,0.032,0.831,0.046c1.183,0.057,2.372,0.095,3.572,0.095l0,0  c15.26,0,29.216-4.633,40.042-12.292l1.898-1.38l-9.666-15.859L200.82,339.895z" data-original="#009000" class="" data-old_color="#FFFFFF"/>
<path style="fill: #000" d="M294.533,359.573l33.016-52.099c2.612-4.121,1.821-9.532-1.86-12.734l0,0  c-3.931-3.419-9.842-3.196-13.504,0.511l-24.315,24.617c-3.225,3.265-8.75,0.55-8.136-3.997l7.15-52.976  c0.764-5.66-3.42-10.786-9.119-11.171l-6.699-0.453c-5.034-0.34-9.514,3.17-10.389,8.139l-12.763,72.513  c-0.71,4.033-5.831,5.363-8.414,2.187l-39.972-49.159c-2.766-3.402-7.444-4.572-11.485-2.873l-6.999,2.941  c-5.541,2.329-7.733,9.027-4.641,14.181l41.076,68.467c5.948,9.915,8.401,21.547,6.914,33.014  c-5.323,41.057-11.936,79.778-38.997,111.32H326.6l0,0c-28.968-33.766-36.114-75.757-39.948-120.035  C285.671,380.595,288.424,369.212,294.533,359.573z" data-original="#BF6101" class="" data-old_color="#0A0A0A"/>
<path style="fill:#000000" d="M327.549,307.474c2.612-4.121,1.822-9.532-1.86-12.734l0,0c-3.931-3.419-9.842-3.196-13.504,0.511  l-10.859,10.993l0,0l-13.456,13.623c-3.225,3.265-8.75,0.55-8.136-3.997l7.15-52.976c0.745-5.517-3.216-10.514-8.694-11.12  l-20.105,124.965c-0.338,1.614-0.602,3.243-0.786,4.884l0,0l0,0c-0.383,3.415-0.434,6.878-0.135,10.341  c3.836,44.279,10.982,86.27,39.95,120.036l0,0h29.488l0,0c-28.968-33.766-36.114-75.757-39.948-120.035  c-0.984-11.37,1.77-22.752,7.878-32.392L327.549,307.474z" data-original="#9A4D01" class="" data-old_color="#FFFFFF"/>
<path v-bind:style="{fill: color}"  d="M241.333,60.5c-21.621,0-40.232,12.832-48.669,31.29c-8.716-6.159-19.346-9.79-30.831-9.79  c-29.547,0-53.5,23.953-53.5,53.5c0,9.749,2.621,18.881,7.177,26.752c-25.656,3.945-45.304,26.115-45.304,52.875  c0,29.547,23.953,53.5,53.5,53.5S294.833,143.547,294.833,114S270.882,60.5,241.333,60.5z" data-original="#28A528" class="" data-old_color="#020202"/></g> </svg>
`
}