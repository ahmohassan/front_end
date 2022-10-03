import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';


export const client =  sanityClient({
    projectId:'d11cqiu9',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token:'skGTaiFOrLM7V7n8pLy0DUUDtBWgIfsPwGAbhS7tbnE6wjZUPmNq126VDOLOMefmGvqfERZy4bfPzNIWT29jCPi8nW9uItrFN9vFjouXeaBH8G4d8F1THqIlNsevcOpCyv8aWVaQNBhNS36jNyb29cGOswbt8CSRZNC27FTCj23h8OB4yni6'

});


const builder =imageUrlBuilder(client);
export const  urlFor = (source) => builder.image(source);
 