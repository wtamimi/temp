!function(){metadata={systemName:"Regulatory.ATP.Integration.MuleSoft.FileAPITest",displayName:"Regulatory ATP MuleSoft File API Test",description:"JS broker for ATP Files using MuleSoft API gateway.",configuration:{MuleSoftBaseURL:{displayName:"MuleSoft API Gateway Base URL, and excluding the API path.",type:"string",value:"https://api-dev.syngenta.com/ecom/file-management"}}};const e="/downloadfiles/v1.0/";ondescribe=async function({configuration:e}){postSchema({objects:{atpFile2:{displayName:"ATP File",description:"ATP File Storage using MuleSoft and AWS S3.",properties:{fileName:{displayName:"File Name",type:"string"},content:{displayName:"File",type:"string"},contentType:{displayName:"Content Type",type:"string"},size:{displayName:"Size",type:"string"}},methods:{get:{displayName:"Get ATP File",type:"read",inputs:["fileName"],requiredInputs:["fileName"],outputs:["content","contentType","size"]},put:{displayName:"Put ATP File",type:"create",inputs:["fileName","content"],requiredInputs:["fileName","content"],outputs:["contentType","size"]},delete:{displayName:"Delete ATP File",type:"delete",inputs:["fileName"],requiredInputs:["fileName"]}}}}})},onexecute=async function({objectName:t,methodName:a,parameters:n,properties:s,configuration:o,schema:i}){switch(t){case"atpFile2":await async function(t,a,n,s){switch(t){case"get":await function(t,a,n){return new Promise((t,s)=>{var o=new XMLHttpRequest;o.onreadystatechange=function(){try{if(console.log("xhr.readyState: "+o.readyState),4!==o.readyState)return;if(console.log("xhr.status: "+o.status),200!==o.status)throw new Error("Failed with status "+o.status);postResult({content:o.response,contentType:o.getResponseHeader("Content-Type"),size:o.getResponseHeader("Content-Length")}),t()}catch(e){s()}},console.log("config url: "+n.MuleSoftBaseURL);var i=n.MuleSoftBaseURL+e+a.fileName;console.log("file download url: "+i),o.open("GET",i),o.withCredentials=!0,o.setRequestHeader("destination_s3","ATP"),o.send()})}(0,a,s);break;case"put":case"delete":await new Promise((e,t)=>{throw new Error("The method is not implemented yet.")});break;default:throw new Error("The method "+t+" is not supported.")}}(a,s,0,o);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
