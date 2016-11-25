//
//  ViewController.m
//  ny_native
//
//  Created by NiYao on 9/27/16.
//  Copyright © 2016 SuneBearNi. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
#import <RCTBundleURLProvider.h>
#import <RCTBridge+Private.h>
#import "RNBridgeModule.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    NSString *bundleRoot = @"index.ios";
    NSURL *url = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:bundleRoot fallbackResource:nil];
    RCTRootView *rootView = nil;
    if (url) {
        NSDictionary *properties = @{
                                     @"route": @"react-native-redux-app"
                                     };
        rootView = [[RCTRootView alloc] initWithBundleURL:url
                                               moduleName:@"RNApp"
                                        initialProperties:properties
                                            launchOptions: nil];
        
        rootView.frame = [UIScreen mainScreen].bounds;
        [self.view addSubview:rootView];
        [RNBridgeModule setup];
    }
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
