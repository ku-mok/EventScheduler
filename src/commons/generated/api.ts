/* tslint:disable */
/* eslint-disable */
/**
 * EventSchedularAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {number}
     * @memberof Event
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'place': string;
    /**
     * 
     * @type {Array}
     * @memberof Event
     */
    'actor': Array;
    /**
     * 
     * @type {EventDate}
     * @memberof Event
     */
    'date'?: EventDate;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'sellDate'?: string;
    /**
     * 
     * @type {Array}
     * @memberof Event
     */
    'goDate'?: Array;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    'url'?: string;
}
/**
 * 
 * @export
 * @interface EventDate
 */
export interface EventDate {
    /**
     * 
     * @type {string}
     * @memberof EventDate
     */
    'start'?: string;
    /**
     * 
     * @type {string}
     * @memberof EventDate
     */
    'end'?: string;
}

/**
 * EventApi - axios parameter creator
 * @export
 */
export const EventApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete event by event id
         * @param {string} eventId ID of event to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventEventIdDelete: async (eventId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('eventEventIdDelete', 'eventId', eventId)
            const localVarPath = `/event/{eventId}`
                .replace(`{${"eventId"}}`, encodeURIComponent(String(eventId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get event by event id
         * @param {string} eventId ID of event to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventEventIdGet: async (eventId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('eventEventIdGet', 'eventId', eventId)
            const localVarPath = `/event/{eventId}`
                .replace(`{${"eventId"}}`, encodeURIComponent(String(eventId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing event info
         * @param {string} eventId Event ID
         * @param {Event} event Event object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventEventIdPut: async (eventId: string, event: Event, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('eventEventIdPut', 'eventId', eventId)
            // verify required parameter 'event' is not null or undefined
            assertParamExists('eventEventIdPut', 'event', event)
            const localVarPath = `/event/{eventId}`
                .replace(`{${"eventId"}}`, encodeURIComponent(String(eventId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(event, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing event info
         * @param {Event} event Event object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventPost: async (event: Event, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'event' is not null or undefined
            assertParamExists('eventPost', 'event', event)
            const localVarPath = `/event`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(event, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all events
         * @param {string} [before] Filter events before this date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchEventsList: async (before?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/event`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (before !== undefined) {
                localVarQueryParameter['before'] = (before as any instanceof Date) ?
                    (before as any).toISOString() :
                    before;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventApi - functional programming interface
 * @export
 */
export const EventApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete event by event id
         * @param {string} eventId ID of event to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventEventIdDelete(eventId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventEventIdDelete(eventId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get event by event id
         * @param {string} eventId ID of event to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventEventIdGet(eventId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventEventIdGet(eventId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update an existing event info
         * @param {string} eventId Event ID
         * @param {Event} event Event object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventEventIdPut(eventId: string, event: Event, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventEventIdPut(eventId, event, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update an existing event info
         * @param {Event} event Event object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventPost(event: Event, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Event>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventPost(event, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all events
         * @param {string} [before] Filter events before this date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchEventsList(before?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Event>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fetchEventsList(before, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventApi - factory interface
 * @export
 */
export const EventApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete event by event id
         * @param {string} eventId ID of event to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventEventIdDelete(eventId: string, options?: any): AxiosPromise<void> {
            return localVarFp.eventEventIdDelete(eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get event by event id
         * @param {string} eventId ID of event to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventEventIdGet(eventId: string, options?: any): AxiosPromise<Event> {
            return localVarFp.eventEventIdGet(eventId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an existing event info
         * @param {string} eventId Event ID
         * @param {Event} event Event object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventEventIdPut(eventId: string, event: Event, options?: any): AxiosPromise<Event> {
            return localVarFp.eventEventIdPut(eventId, event, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an existing event info
         * @param {Event} event Event object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventPost(event: Event, options?: any): AxiosPromise<Event> {
            return localVarFp.eventPost(event, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all events
         * @param {string} [before] Filter events before this date
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchEventsList(before?: string, options?: any): AxiosPromise<Array<Event>> {
            return localVarFp.fetchEventsList(before, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventApi - object-oriented interface
 * @export
 * @class EventApi
 * @extends {BaseAPI}
 */
export class EventApi extends BaseAPI {
    /**
     * 
     * @summary Delete event by event id
     * @param {string} eventId ID of event to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    public eventEventIdDelete(eventId: string, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).eventEventIdDelete(eventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get event by event id
     * @param {string} eventId ID of event to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    public eventEventIdGet(eventId: string, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).eventEventIdGet(eventId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an existing event info
     * @param {string} eventId Event ID
     * @param {Event} event Event object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    public eventEventIdPut(eventId: string, event: Event, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).eventEventIdPut(eventId, event, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an existing event info
     * @param {Event} event Event object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    public eventPost(event: Event, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).eventPost(event, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all events
     * @param {string} [before] Filter events before this date
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    public fetchEventsList(before?: string, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).fetchEventsList(before, options).then((request) => request(this.axios, this.basePath));
    }
}


