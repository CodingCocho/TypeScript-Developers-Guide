import 'reflect-metadata';
import {RequestHandler} from 'express';
import {Methods} from './Methods';
import {MetadataKeys} from './MetadataKeys';

interface RouteHandlerDescriptor extends PropertyDescriptor
{
  value?: RequestHandler
}

function routerBinder(method: string)
{
  // Decorator factory
 return function (path: string)
  {
    // Decorator
    return function(target: any, key: string, desc: RouteHandlerDescriptor)
    {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key)
      Reflect.defineMetadata(MetadataKeys.method, method, target, key)
    }
  }
}

export const get = routerBinder(Methods.get);
export const put = routerBinder(Methods.put);
export const post = routerBinder(Methods.post);
export const del = routerBinder(Methods.del);
export const patch = routerBinder(Methods.patch);




