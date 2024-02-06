type NetListElement = {
    id: string;
    title: string;
    description: string;
};

type CreateNetListElementCommand = {
    title: string;
    description: string;
};

type DeleteNetListElementCommand = {
    id: string;
};
