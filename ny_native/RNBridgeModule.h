//
//  RNCalendarManager.h
//  ny_native
//
//  Created by NiYao on 11/15/16.
//  Copyright © 2016 SuneBearNi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <RCTBridgeModule.h>

@interface RNBridgeModule : NSObject <RCTBridgeModule>

+ (void)setup;
+ (instancetype)sharedManager;

@end
