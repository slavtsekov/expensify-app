import moment from "moment";

const defaultFilters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filters = {
    text: "bill",
    sortBy: "amount",
    startDate: moment(0),
    endDate: moment().add(4, "days")
};

export { defaultFilters, filters };