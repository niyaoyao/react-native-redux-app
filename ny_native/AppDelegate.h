//
//  AppDelegate.h
//  ny_native
//
//  Created by NiYao on 9/27/16.
//  Copyright © 2016 SuneBearNi. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;


@end

