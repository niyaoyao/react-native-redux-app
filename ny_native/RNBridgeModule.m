//
//  RNCalendarManager.m
//  ny_native
//
//  Created by NiYao on 11/15/16.
//  Copyright © 2016 SuneBearNi. All rights reserved.
//

#import "RNBridgeModule.h"

@implementation RNBridgeModule

+ (instancetype)sharedManager {
    static RNBridgeModule *manager = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        manager = [[self alloc] init];
    });
    return manager;
}

+ (void)setup {
    [RNBridgeModule sharedManager];
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)event location:(NSString *)location) {
    NSLog(@"%@ %@", event, location);
}

@end
