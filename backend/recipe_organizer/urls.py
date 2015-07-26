from django.conf.urls import include, patterns, url
from django.contrib import admin

urlpatterns = patterns('',
    url('^', include('apps.recipes.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
