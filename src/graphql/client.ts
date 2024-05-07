import {GraphQLClient} from 'graphql-request';

const graphql = new GraphQLClient(
    import.meta.env.VITE_APP_GRAPHCMS_URL,
    {
        headers: {
            authorization: import.meta.env.VITE_APP_GRAPHCMS_TOKEN,
        },
    }
);

export default graphql;