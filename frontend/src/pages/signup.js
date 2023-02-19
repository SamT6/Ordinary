import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/fonts.css';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import background from '../images/sky.jpg';
import metamask_fox from '../images/MetaMask_Fox.png';
import { NFTStorage, File, Blob } from 'nft.storage'


const { TextArea } = Input;
const NFT_STORAGE_TOKEN = process.env.REACT_APP_NFTStorage_Key
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })


const Header = ({connect_wallet}) =>  {
    
    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black', // force color here since background changes
        marginTop: 10,
    };

    const imageStyle = {
        width: '20px',
        height: '20px',
    };

    return (
        <div className="header space">
            <Link
                key='home'
                className="header textStyle"
                to='/home'
            >
                <h2 className="header textStyle">Ordinary</h2>
            </Link>
            <div>
                <button style={buttonStyle} onClick={connect_wallet}>
                    <img style={imageStyle} src={metamask_fox} />
                    <h3 className="header textStyle"> Connected with MetaMask</h3>
                </button>
            </div>
        </div >
    );

}


const Signup = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const divStyle = {
        height: "100vh",
        display:"flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        margin: 0,
        padding: 0,
    }

    const onFinish = async (values) => {
        console.log('Success:', values);
        const someData = new Blob(["hello world"])
        console.log("token: ", process.env.REACT_APP_NFTStorage_Key)

        const metadata = await client.store({
            name: "Profile NFT",
            description: "User created a profile NFT",
            image: someData,
            properties: {
                custom: values,
            }
        })
        console.log('IPFS URL for the metadata:', metadata.url)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
         <Header />
        <div style={divStyle}>
           <div
             style={{
                display:"flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 15,
                marginTop: 70
             }}
           >
           <h2>Welcome to Ordinary! 🥳</h2>
           <Form
                name="basic"
                // labelCol={{
                //     span: 8,
                // }}
                // wrapperCol={{
                //     span: 16,
                // }}
                // style={{
                //     maxWidth: 1000,
                // }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    // rules={[
                    //     {
                    //     required: true,
                    //     message: 'Please input your username!',
                    //     },
                    // ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Short Intro" name="intro">
                    <TextArea rows={3} />
                </Form.Item>

                <Form.Item
                    label="Websites"
                    name="websites"
                >
                    <Input placeholder="LinkedIn, Twitter, etc (separated by comma)" />
                </Form.Item>

                <Form.Item label="Portfolio Project(s)" name="projects">
                    <TextArea rows={3} />
                </Form.Item>

                <Form.Item label="Role" name="role">
                    <Radio.Group value={formLayout}>
                        <Radio.Button value="engineer">Engineer</Radio.Button>
                        <Radio.Button value="designer">Designer</Radio.Button>
                        <Radio.Button value="manager">Manager</Radio.Button>
                        <Radio.Button value="marketer">Marketer</Radio.Button>
                        <Radio.Button value="other">Other</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item
                    wrapperCol={{
                        offset: 10,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Sign up!
                    </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
        </>
    );
};

export default Signup;