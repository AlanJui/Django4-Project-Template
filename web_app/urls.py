"""web_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.auth.views import LogoutView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path(
        '',
        include(
            ('article_pronunciation.urls', 'article_pronunciation'),
            namespace='article_pronunciation',
        ),
    ),
    path(
        'han_ji_dict/',
        include(('han_ji_dict.urls', 'han_ji_dict'), namespace='han_ji_dict'),
    ),
    path('logout/', LogoutView.as_view(), name='logout'),
]
# urlpatterns += staticfiles_urlpatterns()
urlpatterns = staticfiles_urlpatterns() + urlpatterns
