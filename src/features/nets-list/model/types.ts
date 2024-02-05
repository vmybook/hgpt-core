type NetListElement = {
    id: string;
    title: string;
    description: string;
};

type CreateNetListElementCommand = {
    name: string;
    description: string;
};

type DeleteNetListElementCommand = {
    id: string;
};
