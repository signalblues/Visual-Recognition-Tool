import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'

import Button from './Button'
import Styles from './Styles'

@Radium
export default class TestPage extends React.Component {
    render() {
        var logo = {
            height: '60px',
            float: 'left',
            cursor: 'pointer',
        }

        var title = {
            font: Styles.fontTitle,
            color: Styles.colorTextDark,
        }

        var titleLink = {
            font: Styles.fontTitle,
            color: Styles.colorTextDark,
            cursor: 'pointer',
            textDecoration: 'none',
            marginRight: '10px',
        }

        var last = {
            marginRight: 'auto',
        }

        var link = {
            font: Styles.fontDefault,
            color: Styles.colorTextLight,
            textDecoration: 'none',
            // float: 'left',
            minWidth: '0px',
            marginLeft: '30px',
            cursor: 'pointer',
            display: 'flex',
            ':hover': {
                color: Styles.colorPrimary
            }
        }

        var shadow = {
            // boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
            background: '#fff',
            height: '65px',
        }

        var section = {
            height: '566px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0 0 80px'
            // backgroundColor: 'red',
            // backgroundColor: Styles.colorPrimary,
        }

        var section2 = {
            height: 'auto',
            // backgroundColor: 'blue',
            backgroundColor: Styles.colorPrimary,
        }

        var contentWrapper = {
            // maxWidth: '1000px',
            width: '100%',
            height: '100%',
            padding: '0 30px 0 20px',
            marginTop: '10px',
            display: 'flex',
            lineHeight: '65px',
            alignItems: 'center',
        }

        var user = {
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis',
        }

        var button = {
            display: 'flex',
            flex: 'none'
        }

        var apibutton = {
            font: Styles.fontHeader,
            fontWeight: '200',
            padding: '10px 40px 10px 40px',
            height: 'auto',
            borderRadius: '100px',
        }

        var content = {
            maxWidth: '1000px',
            width: '100%',
            margin: 'auto',
        }

        var sdk = {
            width: '41px',
            height: '40px',
            backgroundSize: '41px 40px',

            padding: '0',
            margin: '0',

            overflow: 'hidden',
            textIndent: '101%',
            whiteSpace: 'nowrap',
            margin: '5px 20px',
            display: 'block',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: '.8',
            ':hover': {
                opacity: '1',
            }
        }

        var bar = {
            margin: '1.5em 0 0',
            padding: '1em',
            background: '#F9F9FB',
            borderTop: '1px solid #d3d3d3',
        }

        var node = {
            backgroundImage: 'url(/sdk_icons/node.png)',
        }

        var swift = {
            backgroundImage: 'url(/sdk_icons/swift.png)',
        }

        var android = {
            backgroundImage: 'url(/sdk_icons/android.png)',
        }

        var python = {
            backgroundImage: 'url(/sdk_icons/python.png)',
        }

        var java = {
            backgroundImage: 'url(/sdk_icons/java.png)',
        }

        var unity = {
            backgroundImage: 'url(/sdk_icons/unity.png)',
        }

        var net = {
            backgroundImage: 'url(/sdk_icons/dot-net-standard.png)',
            width: '48px',
            height: '40px',
            backgroundSize: '48px 40px',
        }

        return (
            <div>
                <div style={shadow}>
                    <div style={contentWrapper}>
                        <Link to='/' style={logo}><img src={'/watson_color.png'} style={logo}></img></Link>
                        <Link to='/' style={titleLink}>Watson Vision</Link>

                        <a href='/demo' key='a' style={link}>Demo</a>
                        <a href='/' key='b' style={link}>Pricing</a>
                        <a href='/' key='c' style={[link, last]}>Documentation</a>

                        <a style={{textDecoration: 'none'}} href='/tool'>
                            <Button
                                style={[button, {padding: '0 35px'}]}
                                id={'button--base--update-api-key'}
                                onClick={null}
                                text={localStorage.getItem('api_key') == 'undefined'
                                    || localStorage.getItem('api_key') == null
                                    || localStorage.getItem('api_key') == '' ? 'Sign In' : 'Vision Tool'}/>
                        </a>
                    </div>
                </div>
                <div style={section}>
                    <div style={{flex: '1.31803398875'}}>
                        <img src={'/test.png'} style={{
                            width: '100%',
                            height: '100%'
                        }}></img>
                    </div>
                    <div style={{flex: '1'}}>
                        <div style={{
                            font: Styles.fontTitle,
                            color: Styles.colorTextDark,
                            fontWeight: '200',
                            textAlign: 'center',
                            marginBottom: '35px'
                        }}>
                            Understand images in 5 lines of code
                        </div>
                        <div style={{textAlign: 'center'}}>
                            <a style={{textDecoration: 'none'}} href='https://console.ng.bluemix.net/catalog/services/visual-recognition/' target='_blank'>
                                <Button
                                    style={[apibutton]}
                                    onClick={null}
                                    kind={'bold'}
                                    text={'Get a free API key'}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={section2}>
                    <div style={bar}>
                        <ul style={{textAlign: 'center', padding: '0', margin: '0'}}>
                            <li style={{display: 'inline-block'}}>
                                <a key='node' style={[sdk, node]} title="Node.js" href="#">Node.js</a>
                            </li>
                            <li style={{display: 'inline-block'}}>
                                <a key='swift' style={[sdk, swift]} title="Swift" href="#">Swift</a>
                            </li>
                            <li style={{display: 'inline-block'}}>
                                <a key='android' style={[sdk, android]} title="Android" href="#">Android</a>
                            </li>
                            <li style={{display: 'inline-block'}}>
                                <a key='python' style={[sdk, python]} title="Python" href="#">Python</a>
                            </li>
                            <li style={{display: 'inline-block'}}>
                                <a key='java' style={[sdk, java]} title="Java" href="#">Java</a>
                            </li>
                            <li style={{display: 'inline-block'}}>
                                <a key='unity' style={[sdk, unity]} title="Unity" href="#">Unity</a>
                            </li>
                            <li style={{display: 'inline-block'}}>
                                <a key='net' style={[sdk, net]} title=".NET Standard" href="#">.NET Standard</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={[section, {height: '550px', padding: '0', backgroundColor: Styles.colorPrimary}]}>
                    <img src={'/dogs.png'} style={{
                        width: 'auto',
                        height: '100%'
                    }}/>

                <div style={{marginLeft: '80px', marginRight: '80px', marginBottom: '80px'}}>
                        <div style={{
                            font: Styles.fontTitle,
                            fontSize: '2.8em',
                            color: 'white',
                            fontWeight: '200',
                            marginBottom: '12px'
                        }}>
                            Upload Photos
                        </div>
                        <div style={{
                            font: Styles.fontDefault,
                            width: '340px',
                            fontSize: '1.2em',
                            lineHeight: '1.4em',
                            color: 'white',
                            opacity: '0.6'
                        }}>
                            Create and train custom classifiers using your own image collections. Group images into classes and upload them with the tool or one of our SDKs.
                        </div>
                    </div>
                </div>

                <div style={[section, {justifyContent: 'flex-end', marginTop: '-226px', height: 'auto', padding: '0', position: 'absolute'}]}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src={'/white_arrow.png'} style={{
                            marginLeft: '250px',
                            marginBottom: '30px',
                            width: '77.5px',
                            height: '116px'
                        }}/>
                        <div style={{marginLeft: '80px', marginRight: '80px', backgroundColor: 'white', padding: '30px', borderRadius: '5px', boxShadow: '0px 5px 20px rgba(0,0,0,0.1)'}}>
                            <div style={{
                                font: Styles.fontTitle,
                                fontSize: '2.8em',
                                color: Styles.colorTextDark,
                                fontWeight: '200',
                                marginBottom: '12px'
                            }}>
                                Train
                            </div>
                            <div style={{
                                font: Styles.fontDefault,
                                width: '300px',
                                fontSize: '1.2em',
                                lineHeight: '1.4em',
                                color: Styles.colorTextDark,
                                opacity: '0.6'
                            }}>
                                Watson will process your images and create an API endpoint for your classifier.
                            </div>
                        </div>
                        <img src={'/purple_arrow.png'} style={{
                            marginTop: '30px',
                            marginLeft: '40px',
                            width: '252px',
                            height: '106px'
                        }}/>
                    </div>
                </div>

                <div style={[section, {justifyContent: 'center', height: 'auto', padding: '0', marginTop: '150px'}]}>
                    <div style={{}}>
                        <div style={{
                            font: Styles.fontTitle,
                            fontSize: '2.8em',
                            color: Styles.colorTextDark,
                            fontWeight: '200',
                            marginBottom: '12px'
                        }}>
                            Classify
                        </div>
                        <div style={{
                            font: Styles.fontDefault,
                            fontSize: '1.2em',
                            lineHeight: '1.4em',
                            color: Styles.colorTextDark,
                            opacity: '0.6'
                        }}>
                            Make a call. Get a response.
                        </div>
                    </div>
                </div>

                <div style={[section, {justifyContent: 'center', height: 'auto', padding: '0', marginTop: '100px', marginBottom: '100px'}]}>
                    <div style={{
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                        borderRadius: '5px',
                        position: 'absolute',
                        marginTop: '-52px',
                        marginLeft: '-138px',
                        backgroundImage: `url('/demo_photos/5.jpg')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '276px',
                        height: '276px'
                    }}/>
                    <div style={{backgroundColor: '#f3f3f3', padding: '30px', paddingLeft: '190px', borderRadius: '5px', boxShadow: '0px 2px 6px rgba(0,0,0,0.2)'}}>
                        <div style={{
                            font: Styles.fontDefault,
                            fontFamily: '"Lucida Console", Monaco, monospace',
                            width: 'auto',
                            fontSize: '1.1em',
                            lineHeight: '1.4em',
                            color: Styles.colorTextDark,
                            opacity: '1.0'
                        }}>
                        {'{\n\u00a0\u00a0\u00a0\u00a0"custom_classes": 1,\n\u00a0\u00a0\u00a0\u00a0"images": [{\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"classifiers": [{\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"classes": [\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0{"class": "Pug", "score": 0.982177}\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0],\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"classifier_id": "Dogs_1680254220",\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"name": "Dogs"\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0}],\n\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"image": "my_test_photo.jpg"\n\u00a0\u00a0\u00a0\u00a0}],\n\u00a0\u00a0\u00a0\u00a0"images_processed": 1\n}'.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                        })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
